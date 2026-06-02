const { Jimp } = require('jimp');
const fs = require('fs');

async function cropImage() {
  const image = await Jimp.read('src/assets/coffee-mix.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Image dimensions: ${width}x${height}`);
  
  const visited = new Uint8Array(width * height);
  const boxes = [];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (visited[idx]) continue;
      
      const color = image.getPixelColor(x, y);
      const alpha = (color & 0xFF);
      
      if (alpha > 20) {
        // found a new component
        let minX = x, maxX = x, minY = y, maxY = y;
        const queue = [[x, y]];
        visited[idx] = 1;
        let area = 0;
        
        while (queue.length > 0) {
          const [cx, cy] = queue.pop();
          area++;
          
          if (cx < minX) minX = cx;
          if (cx > maxX) maxX = cx;
          if (cy < minY) minY = cy;
          if (cy > maxY) maxY = cy;
          
          // neighbors
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              const nx = cx + dx;
              const ny = cy + dy;
              
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                const nIdx = ny * width + nx;
                if (!visited[nIdx]) {
                  visited[nIdx] = 1;
                  const nColor = image.getPixelColor(nx, ny);
                  if ((nColor & 0xFF) > 20) {
                    queue.push([nx, ny]);
                  }
                }
              }
            }
          }
        }
        
        // if the component is large enough, save its bounding box
        if (area > 500) {
          boxes.push({ minX, maxX, minY, maxY, area });
        }
      } else {
        visited[idx] = 1; // mark transparent as visited
      }
    }
  }
  
  console.log(`Found ${boxes.length} components.`);
  
  // Sort boxes left-to-right, top-to-bottom
  boxes.sort((a, b) => {
    if (Math.abs(a.minY - b.minY) > 50) return a.minY - b.minY;
    return a.minX - b.minX;
  });
  
  // Create dir if not exists
  if (!fs.existsSync('src/assets/cropped')) {
    fs.mkdirSync('src/assets/cropped');
  }
  
  // Crop and save
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const bw = box.maxX - box.minX + 1;
    const bh = box.maxY - box.minY + 1;
    console.log(`Component ${i}: ${bw}x${bh} at (${box.minX}, ${box.minY})`);
    
    // add a small margin
    const margin = 10;
    const cropX = Math.max(0, box.minX - margin);
    const cropY = Math.max(0, box.minY - margin);
    const cropW = Math.min(width - cropX, bw + margin * 2);
    const cropH = Math.min(height - cropY, bh + margin * 2);
    
    const clone = image.clone();
    clone.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
    await clone.write(`src/assets/cropped/item_${i}.png`);
  }
}

cropImage().catch(console.error);

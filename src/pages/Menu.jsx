import cup1 from '../assets/cropped/item_15.png';
import cup2 from '../assets/cropped/item_16.png';
import cup3 from '../assets/cropped/item_17.png';
import cup4 from '../assets/cropped/item_2.png';
import cup5 from '../assets/cropped/item_3.png';
import cup6 from '../assets/cropped/item_4.png';

const menuItems = [
  { id: 1, name: "Caramel Macchiato", desc: "Espresso layered with steamed milk and caramel.", price: "$4.99", img: cup1 },
  { id: 2, name: "Iced Vanilla Latte", desc: "Chilled espresso with milk and vanilla syrup.", price: "$5.49", img: cup2 },
  { id: 3, name: "Dark Roast Mocha", desc: "Rich espresso combined with dark chocolate.", price: "$5.99", img: cup3 },
  { id: 4, name: "Classic Cappuccino", desc: "Equal parts espresso, steamed milk, and foam.", price: "$4.49", img: cup4 },
  { id: 5, name: "Hazelnut Flat White", desc: "Smooth ristretto shots with velvety milk.", price: "$4.79", img: cup5 },
  { id: 6, name: "Americano Black", desc: "Bold espresso diluted with hot water.", price: "$3.49", img: cup6 },
];

const Menu = () => {
  return (
    <div className="container page-wrapper">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 className="text-primary animate-fade-in" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Menu</h1>
        <p className="text-muted animate-fade-in" style={{ animationDelay: '0.1s', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover our premium selection of handcrafted coffees, carefully curated just for you.
        </p>
      </div>
      
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={item.id} className="menu-card glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
            <div className="menu-card-img-wrapper">
              <img src={item.img} alt={item.name} className="menu-card-img" />
            </div>
            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p className="text-muted">{item.desc}</p>
              <div className="menu-card-footer">
                <span className="price text-primary">{item.price}</span>
                <button className="btn btn-outline btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

import cup1 from '../assets/cropped/item_15.png';
import cup2 from '../assets/cropped/item_16.png';
import cup3 from '../assets/cropped/item_17.png';
import cup4 from '../assets/cropped/item_2.png';
import cup5 from '../assets/cropped/item_3.png';
import cup6 from '../assets/cropped/item_4.png';
import bean1 from '../assets/cropped/item_7.png';
import bean2 from '../assets/cropped/item_9.png';
import bean3 from '../assets/cropped/item_11.png';
import bean4 from '../assets/cropped/item_12.png';
import beanBig from '../assets/cropped/item_10.png';

import { Star } from 'lucide-react';

const menuItems = [
  { id: 1, name: "Cappuccino", desc: "20% эспрессо, 40% молока, 40% молочной пенки.", price: "120 р.", img: cup1, rating: "4.9" },
  { id: 2, name: "Latte", desc: "30% эспрессо, 70% свежего молока.", price: "140 р.", img: cup2, rating: "5.0" },
  { id: 3, name: "Mocha", desc: "20% эспрессо, 50% горячего молока.", price: "140 р.", img: cup3, rating: "4.7" },
  { id: 4, name: "Classic Americano", desc: "Bold espresso diluted with hot water.", price: "90 р.", img: cup4, rating: "4.5" },
  { id: 5, name: "Hazelnut Flat White", desc: "Smooth ristretto shots with velvety milk.", price: "130 р.", img: cup5, rating: "4.8" },
  { id: 6, name: "Vanilla Espresso", desc: "Strong espresso with a hint of vanilla.", price: "110 р.", img: cup6, rating: "4.6" },
];

const Menu = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Beans */}
      <img src={bean1} alt="" className="floating-bean float-2" style={{ top: '5%', right: '10%', width: '120px', filter: 'blur(2px)' }} />
      <img src={bean2} alt="" className="floating-bean float-1" style={{ top: '30%', left: '2%', width: '90px' }} />
      <img src={bean3} alt="" className="floating-bean float-3" style={{ bottom: '25%', right: '8%', width: '60px' }} />
      <img src={bean4} alt="" className="floating-bean float-2" style={{ bottom: '5%', left: '15%', width: '70px' }} />
      <img src={beanBig} alt="" className="floating-bean float-1" style={{ top: '60%', right: '-5%', width: '200px', filter: 'blur(4px)', opacity: 0.4 }} />
      <img src={beanBig} alt="" className="floating-bean float-3" style={{ top: '15%', left: '-5%', width: '150px', opacity: 0.3 }} />

      <div className="container page-wrapper" style={{ position: 'relative', zIndex: 1 }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 className="text-primary animate-fade-in" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Menu</h1>
        <p className="text-muted animate-fade-in" style={{ animationDelay: '0.1s', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover our premium selection of handcrafted coffees, carefully curated just for you.
        </p>
      </div>
      
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={item.id} className="menu-card animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
            <div className="menu-card-img-wrapper">
              <img src={item.img} alt={item.name} className="menu-card-img" />
              <div className="rating-badge">{item.rating} <Star size={12} fill="#ffb400" /></div>
            </div>
            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>{item.desc}</p>
              <div className="menu-card-footer">
                <span className="price text-main">{item.price}</span>
                <button className="btn-sm">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Menu;

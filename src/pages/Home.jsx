import { ArrowRight, Star, ShieldCheck, Clock, Coffee, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCup from '../assets/cropped/item_1.png';
import cup1 from '../assets/cropped/item_15.png';
import cup2 from '../assets/cropped/item_16.png';
import cup3 from '../assets/cropped/item_17.png';
import spoon from '../assets/cropped/item_8.png';
import bean1 from '../assets/cropped/item_13.png';
import bean2 from '../assets/cropped/item_14.png';
import bean3 from '../assets/cropped/item_6.png';
import beanBig from '../assets/cropped/item_10.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Beans */}
      <img src={bean1} alt="" className="floating-bean float-1" style={{ top: '15%', left: '8%', width: '50px' }} />
      <img src={bean2} alt="" className="floating-bean float-3" style={{ top: '45%', right: '5%', width: '60px' }} />
      <img src={bean3} alt="" className="floating-bean float-2" style={{ bottom: '15%', left: '4%', width: '70px' }} />
      <img src={beanBig} alt="" className="floating-bean float-1" style={{ top: '75%', right: '-5%', width: '250px', filter: 'blur(5px)', opacity: 0.3 }} />
      <img src={beanBig} alt="" className="floating-bean float-3" style={{ top: '30%', left: '-8%', width: '180px', filter: 'blur(3px)', opacity: 0.4 }} />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Experience the <br />
              <span className="text-primary">Perfect Pour</span>
            </h1>
            <p className="hero-subtitle text-muted">
              Discover the rich flavors of our artisanal coffee, ethically sourced and perfectly roasted for your daily delight.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Explore Menu <ArrowRight size={20} />
              </Link>
              <a href="#about-preview" className="btn btn-outline">
                Our Story
              </a>
            </div>
            
            <div className="hero-stats glass-panel">
              <div className="stat">
                <h3>50+</h3>
                <p className="text-muted">Premium Blends</p>
              </div>
              <div className="stat">
                <h3>10k+</h3>
                <p className="text-muted">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="blob-shape">
              <img src={heroCup} alt="Splashing Coffee Cup" className="hero-image" style={{ objectFit: 'contain', padding: '20px' }} />
            </div>
            <div className="floating-badge glass-panel">
              <Star className="text-primary" fill="var(--primary-color)" />
              <span>4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features container section-padding" style={{ position: 'relative' }}>
        <h2 className="section-title text-center text-primary" style={{ marginBottom: '4rem' }}>BODRIN это</h2>
        <div className="features-container">
          <div className="feature-card" style={{ position: 'relative' }}>
            <div className="watermark-number" style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '10rem', opacity: '0.05', fontWeight: 800 }}>1</div>
            <h3 className="text-primary">Высокое качество зерен</h3>
            <p className="text-muted">Наша страсть к кофе начинается с отбора зерен. Мы уделяем внимание каждой детали.</p>
          </div>
          <div className="feature-card" style={{ position: 'relative' }}>
             <div className="watermark-number" style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '10rem', opacity: '0.05', fontWeight: 800 }}>2</div>
            <h3 className="text-primary">Атмосфера вдохновения</h3>
            <p className="text-muted">Наше уютное убежище наполнено атмосферой тепла и уюта.</p>
          </div>
          <div className="feature-card" style={{ position: 'relative' }}>
             <div className="watermark-number" style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '10rem', opacity: '0.05', fontWeight: 800 }}>3</div>
            <h3 className="text-primary">Индивидуальный подход</h3>
            <p className="text-muted">Мы готовим кофе, отражающий ваши предпочтения, создавая уникальные напитки.</p>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="featured-menu container section-padding">
        <div className="section-header text-center">
          <h2 className="section-title text-primary">Signature Blends</h2>
          <p className="text-muted">Handcrafted to perfection, try our most loved coffee creations.</p>
        </div>
        
        <div className="menu-grid mt-4">
          <div className="menu-card">
            <div className="menu-card-img-wrapper">
              <img src={cup1} alt="Cappuccino" className="menu-card-img" />
              <div className="rating-badge">4.9 <Star size={12} fill="#ffb400" /></div>
            </div>
            <div className="menu-card-content">
              <h3>Cappuccino</h3>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>20% эспрессо, 40% молока, 40% молочной пенки.</p>
              <div className="menu-card-footer">
                <span className="price text-main">120 р.</span>
                <button className="btn-sm">+</button>
              </div>
            </div>
          </div>
          
          <div className="menu-card">
            <div className="menu-card-img-wrapper">
              <img src={cup2} alt="Latte" className="menu-card-img" />
              <div className="rating-badge">5.0 <Star size={12} fill="#ffb400" /></div>
            </div>
            <div className="menu-card-content">
              <h3>Latte</h3>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>30% эспрессо, 70% свежего молока.</p>
              <div className="menu-card-footer">
                <span className="price text-main">140 р.</span>
                <button className="btn-sm">+</button>
              </div>
            </div>
          </div>
          
          <div className="menu-card">
            <div className="menu-card-img-wrapper">
              <img src={cup3} alt="Mocha" className="menu-card-img" />
              <div className="rating-badge">4.7 <Star size={12} fill="#ffb400" /></div>
            </div>
            <div className="menu-card-content">
              <h3>Mocha</h3>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>20% эспрессо, 50% горячего молока.</p>
              <div className="menu-card-footer">
                <span className="price text-main">140 р.</span>
                <button className="btn-sm">+</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <Link to="/menu" className="btn btn-primary">View Full Menu <ArrowRight size={20} /></Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="about-preview bg-surface section-padding">
        <div className="container about-preview-container">
          <div className="about-preview-img-wrapper glass-panel">
            <img src={spoon} alt="Coffee Beans on Spoon" className="about-preview-img" />
          </div>
          <div className="about-preview-content">
            <h2 className="section-title text-primary">From Bean to Cup</h2>
            <p className="text-muted mb-3">
              Founded in 2026, BrewHaven was born from a simple passion: to bring the world's most exquisite coffee beans to your daily cup. 
              We believe that coffee is more than just a beverage; it's an experience, a ritual, and a moment of peace in a busy world.
            </p>
            <ul className="about-list">
              <li><Leaf className="text-primary" size={24} /> <span>100% Ethically Sourced Beans</span></li>
              <li><Coffee className="text-primary" size={24} /> <span>Roasted in small batches daily</span></li>
              <li><Award className="text-primary" size={24} /> <span>Award-winning baristas</span></li>
            </ul>
            <Link to="/about" className="btn btn-outline mt-4">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

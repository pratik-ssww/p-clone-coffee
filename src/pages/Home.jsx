import { ArrowRight, Star, ShieldCheck, Clock, Coffee, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCup from '../assets/cropped/item_1.png';
import cup1 from '../assets/cropped/item_15.png';
import cup2 from '../assets/cropped/item_16.png';
import cup3 from '../assets/cropped/item_17.png';
import spoon from '../assets/cropped/item_8.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
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

      {/* Features Section */}
      <section className="features bg-surface">
        <div className="container features-container">
          <div className="feature-card glass-panel">
            <ShieldCheck size={40} className="text-primary mb-3" />
            <h3>Premium Quality</h3>
            <p className="text-muted">We source only the finest beans from top sustainable farms globally.</p>
          </div>
          <div className="feature-card glass-panel">
            <Star size={40} className="text-primary mb-3" />
            <h3>Expert Roasting</h3>
            <p className="text-muted">Our master roasters ensure perfect flavor profiles in every batch.</p>
          </div>
          <div className="feature-card glass-panel">
            <Clock size={40} className="text-primary mb-3" />
            <h3>Fast Delivery</h3>
            <p className="text-muted">Get your coffee fresh and hot, delivered straight to your door.</p>
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
          <div className="menu-card glass-panel">
            <div className="menu-card-img-wrapper">
              <img src={cup1} alt="Caramel Macchiato" className="menu-card-img" />
            </div>
            <div className="menu-card-content">
              <h3>Caramel Macchiato</h3>
              <p className="text-muted">Espresso layered with steamed milk and caramel.</p>
              <div className="menu-card-footer">
                <span className="price text-primary">$4.99</span>
                <button className="btn btn-outline btn-sm">Add</button>
              </div>
            </div>
          </div>
          
          <div className="menu-card glass-panel">
            <div className="menu-card-img-wrapper">
              <img src={cup2} alt="Iced Vanilla Latte" className="menu-card-img" />
            </div>
            <div className="menu-card-content">
              <h3>Iced Vanilla Latte</h3>
              <p className="text-muted">Chilled espresso with milk and vanilla syrup.</p>
              <div className="menu-card-footer">
                <span className="price text-primary">$5.49</span>
                <button className="btn btn-outline btn-sm">Add</button>
              </div>
            </div>
          </div>
          
          <div className="menu-card glass-panel">
            <div className="menu-card-img-wrapper">
              <img src={cup3} alt="Dark Roast Mocha" className="menu-card-img" />
            </div>
            <div className="menu-card-content">
              <h3>Dark Roast Mocha</h3>
              <p className="text-muted">Rich espresso combined with dark chocolate.</p>
              <div className="menu-card-footer">
                <span className="price text-primary">$5.99</span>
                <button className="btn btn-outline btn-sm">Add</button>
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

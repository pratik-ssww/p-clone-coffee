const About = () => {
  return (
    <div className="container page-wrapper" style={{ maxWidth: '800px' }}>
      <h1 className="text-primary animate-fade-in" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3rem' }}>About BrewHaven</h1>
      
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', animationDelay: '0.1s' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Our Story</h2>
        <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Founded in 2026, BrewHaven was born from a simple passion: to bring the world's most exquisite coffee beans to your daily cup. We believe that coffee is more than just a beverage; it's an experience, a ritual, and a moment of peace in a busy world.
        </p>
        <p className="text-muted" style={{ marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Our founders traveled to the highlands of Ethiopia, the volcanic slopes of Colombia, and the lush mountains of Costa Rica to partner directly with farmers who share our commitment to sustainability and quality.
        </p>

        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Our Promise</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '0', color: 'var(--text-muted)' }}>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)' }}>✦</span> 100% Ethically Sourced Beans
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)' }}>✦</span> Roasted in small batches daily
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)' }}>✦</span> Eco-friendly packaging
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--primary-color)' }}>✦</span> Supporting local communities
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

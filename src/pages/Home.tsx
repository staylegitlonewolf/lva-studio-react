import { useState, useEffect } from 'react';
import ScrollArrow from '../components/ScrollArrow';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const [stats, setStats] = useState({
    clients: 0,
    states: 0,
    projects: 0
  });

  useEffect(() => {
    // Animate stats when component mounts
    const animateStats = () => {
      const targets = { clients: 500, states: 50, projects: 1000 };
      const duration = 2000;
      const increment = (target: number) => target / (duration / 16);

      const timer = setInterval(() => {
        setStats(prev => ({
          clients: Math.min(prev.clients + increment(targets.clients), targets.clients),
          states: Math.min(prev.states + increment(targets.states), targets.states),
          projects: Math.min(prev.projects + increment(targets.projects), targets.projects)
        }));
      }, 16);

      setTimeout(() => clearInterval(timer), duration);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      });
    });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lva-studio">

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">LIVING VICTORIOUS ALWAYS™</span>              
          </h1>
          <p className="hero-description">
            We build websites, connect you with solar solutions, secure your health insurance, 
            and maximize your NIL opportunities. Your success is our mission.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive solutions for modern businesses and individuals</p>
          </div>
          
          <div className="services-grid">
            {/* Web Development */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>Custom websites that convert visitors into customers. Built with modern technologies and optimized for performance.</p>
              <ul className="service-features">
                <li>Custom Design & Development</li>
                <li>SEO Optimization</li>
                <li>Mobile-First Responsive</li>
                <li>E-commerce Solutions</li>
              </ul>
            </div>

            {/* Solar Solutions */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-sun"></i>
              </div>
              <h3>Solar Solutions</h3>
              <p>Connect with trusted solar providers to reduce energy costs and contribute to a sustainable future.</p>
              <ul className="service-features">
                <li>Residential & Commercial</li>
                <li>Expert Consultation</li>
                <li>Installation Support</li>
                <li>Financing Options</li>
              </ul>
            </div>

            {/* Health Insurance */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Health Insurance</h3>
              <p>Comprehensive health insurance solutions for individuals, families, and businesses with competitive pricing and excellent coverage.</p>
              
              <div className="pricing-highlights">
                <div className="pricing-item">
                  <span className="price">$120<span>/month</span></span>
                  <span className="plan-type">Basic Coverage</span>
                </div>
                <div className="pricing-item">
                  <span className="price">$300<span>/month</span></span>
                  <span className="plan-type">Family Plans</span>
                </div>
                <div className="pricing-item">
                  <span className="price">$225<span>/month</span></span>
                  <span className="plan-type">Self-Employed</span>
                </div>
              </div>
              
              <ul className="service-features">
                <li>Individual & Family Plans</li>
                <li>Business Group Coverage</li>
                <li>Medicare Supplements</li>
                <li>Dental & Vision Plans</li>
                <li>Prescription Drug Coverage</li>
                <li>Mental Health Services</li>
              </ul>
            </div>

            {/* NIL Partnerships */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>NIL Partnerships</h3>
              <p>Maximize your Name, Image, and Likeness opportunities with strategic partnerships and brand development.</p>
              <ul className="service-features">
                <li>Brand Development</li>
                <li>Sponsorship Deals</li>
                <li>Marketing Strategy</li>
                <li>Legal Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About LVA.studio™</h2>
            <p className="section-subtitle">We're a full-service digital solutions company helping businesses and individuals succeed in the modern world.</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h2>About LVA.studio™</h2>
              <p>We are a full-service digital solutions company dedicated to helping businesses and individuals achieve their goals through innovative technology and strategic partnerships.</p>
              <p>Our founder, David Brown, is a licensed health coverage expert with access to all options, ensuring our clients receive the best possible solutions across all our services.</p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">{Math.floor(stats.clients)}</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{Math.floor(stats.states)}</div>
                  <div className="stat-label">States Covered</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{Math.floor(stats.projects)}</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/media/mainPhoto.png" alt="David Brown - LVA.studio Founder" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll Arrow */}
      <ScrollArrow targetId="services" />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

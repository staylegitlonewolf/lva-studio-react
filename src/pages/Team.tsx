import { useState } from 'react';
import ScrollArrow from '../components/ScrollArrow';
import ScrollToTop from '../components/ScrollToTop';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  expertise: string[];
  featured?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "David Brown",
    title: "Founder & CEO",
    description: "Licensed Health Coverage Expert with access to all options. Leading our mission to connect clients with the best solutions across all services.",
    image: "/media/mainPhoto.png",
    expertise: ["Health Insurance", "Solar Solutions", "NIL Partnerships"],
    featured: true
  },
  {
    name: "Christina James",
    title: "Lead Developer",
    description: "Expert in modern web technologies and creating responsive, user-friendly applications.",
    image: "/media/Team/Christina James.jpg",
    expertise: ["Web Development", "UI/UX Design", "SEO"]
  },
  {
    name: "Braeden LLauro",
    title: "Development Specialist",
    description: "Specializing in modern web development and creating innovative digital solutions.",
    image: "/media/Team/Braeden LLauro.jpg",
    expertise: ["Web Development", "Frontend", "Backend"]
  },
  {
    name: "Chauntel Bender",
    title: "Client Relations Manager",
    description: "Ensuring exceptional client experiences and building lasting partnerships.",
    image: "/media/Team/Chauntel Bender.jpg",
    expertise: ["Client Relations", "Customer Service", "Communication"]
  },
  {
    name: "Matthias Wendler",
    title: "Technical Specialist",
    description: "Providing technical expertise and innovative solutions for complex challenges.",
    image: "/media/Team/Matthias Wendler.jpg",
    expertise: ["Technical Support", "Problem Solving", "Innovation"]
  },
  {
    name: "Olivia Voth",
    title: "Marketing Coordinator",
    description: "Driving brand awareness and strategic marketing initiatives.",
    image: "/media/Team/Olivia Voth.jpg",
    expertise: ["Marketing", "Brand Strategy", "Digital Marketing"]
  }
];

export default function Team() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  const openImageLightbox = (imageSrc: string, imageTitle: string) => {
    setLightboxImage(imageSrc);
    setLightboxTitle(imageTitle);
  };

  const closeImageLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
  };

  return (
    <div className="lva-studio">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Meet Our Team</span>
          </h1>
          <span className="hero-subtitle">The Experts Behind Your Success</span>
          <p className="hero-description">
            Our dedicated team of professionals is committed to delivering exceptional results across all our services.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-subtitle">Meet the professionals who make it all possible</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-member ${member.featured ? 'featured' : ''}`}>
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    onClick={() => openImageLightbox(member.image, member.name)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <p className="member-description">{member.description}</p>
                  <div className="member-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeImageLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeImageLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <img src={lightboxImage} alt={lightboxTitle} />
            <h3>{lightboxTitle}</h3>
          </div>
        </div>
      )}
      
      {/* Scroll Arrow */}
      <ScrollArrow targetId="team" />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
} 
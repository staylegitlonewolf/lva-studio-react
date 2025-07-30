import { useState } from 'react';

interface Certification {
  state: string;
  status: string;
  images: string[];
  pdfUrl: string;
}

const certifications: Certification[] = [
  {
    state: "Florida",
    status: "Active",
    images: [
      "/media/Certifications/Florida1.png",
      "/media/Certifications/Florida2.png"
    ],
    pdfUrl: "/media/Certifications/Florida.pdf"
  },
  {
    state: "Georgia",
    status: "Active",
    images: [
      "/media/Certifications/GALicense.png"
    ],
    pdfUrl: "/media/Certifications/GALicense.pdf"
  },
  {
    state: "Texas",
    status: "Active",
    images: [
      "/media/Certifications/Texas.png"
    ],
    pdfUrl: "#"
  },
  {
    state: "Colorado",
    status: "Active",
    images: [
      "/media/Certifications/Colorado.png"
    ],
    pdfUrl: "#"
  },
  {
    state: "Maryland",
    status: "Active",
    images: [
      "/media/Certifications/Maryland.png"
    ],
    pdfUrl: "/media/Certifications/Maryland.pdf"
  },
  {
    state: "Nevada",
    status: "Active",
    images: [
      "/media/Certifications/Nevada.png"
    ],
    pdfUrl: "#"
  },
  {
    state: "Ohio",
    status: "Active",
    images: [
      "/media/Certifications/Ohio.png"
    ],
    pdfUrl: "/media/Certifications/Ohio.pdf"
  },
  {
    state: "Tennessee",
    status: "Active",
    images: [
      "/media/Certifications/Tennessee.png"
    ],
    pdfUrl: "/media/Certifications/Tennessee.pdf"
  },
  {
    state: "Utah",
    status: "Active",
    images: [
      "/media/Certifications/Utah.png"
    ],
    pdfUrl: "#"
  },
  {
    state: "Virginia",
    status: "Active",
    images: [
      "/media/Certifications/Virgina.png"
    ],
    pdfUrl: "#"
  }
];

export default function Certifications() {
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
          <video className="hero-video" autoPlay muted loop>
            <source src="/media/background.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Licenses & Certifications</span>
          </h1>
          <span className="hero-subtitle">Nationwide Coverage & Expertise</span>
          <p className="hero-description">
            David Brown is licensed to provide health insurance services across multiple states, ensuring comprehensive coverage for all clients.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">State Licenses & Certifications</h2>
            <p className="section-subtitle">Professional credentials across the United States</p>
          </div>
          
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-header">
                  <h3><i className="fas fa-map-marker-alt"></i> {cert.state}</h3>
                  <span className="cert-status">{cert.status}</span>
                </div>
                <div className="cert-images">
                  {cert.images.map((image, imageIndex) => (
                    <img 
                      key={imageIndex}
                      src={image} 
                      alt={`${cert.state} License ${imageIndex + 1}`} 
                      className="cert-image" 
                      onClick={() => openImageLightbox(image, `${cert.state} License ${imageIndex + 1}`)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
                <div className="cert-actions">
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fas fa-file-pdf"></i> View PDF
                  </a>
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
    </div>
  );
} 
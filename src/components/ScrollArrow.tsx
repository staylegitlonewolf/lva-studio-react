import { useState, useEffect } from 'react';

interface ScrollArrowProps {
  targetId: string;
  className?: string;
}

export default function ScrollArrow({ targetId, className = '' }: ScrollArrowProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        // Hide arrow when target section is in view
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId]);

  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`scroll-arrow ${className}`}
      onClick={scrollToSection}
      title={`Scroll to ${targetId}`}
    >
      <i className="fas fa-chevron-down"></i>
    </div>
  );
} 
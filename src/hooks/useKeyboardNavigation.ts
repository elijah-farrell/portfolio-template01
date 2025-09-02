import { useEffect } from 'react';

const sections = ['hero', 'about', 'experience', 'services', 'projects', 'contact'];

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      const currentIndex = currentSection ? sections.indexOf(currentSection) : -1;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentIndex < sections.length - 1) {
            const element = document.getElementById(sections[currentIndex + 1]);
            if (element) {
              const headerHeight = 80;
              const elementPosition = element.offsetTop - headerHeight;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentIndex > 0) {
            const element = document.getElementById(sections[currentIndex - 1]);
            if (element) {
              const headerHeight = 80;
              const elementPosition = element.offsetTop - headerHeight;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }
          break;
        case 'Home':
          e.preventDefault();
          const homeElement = document.getElementById(sections[0]);
          if (homeElement) {
            const headerHeight = 80;
            const elementPosition = homeElement.offsetTop - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
          break;
        case 'End':
          e.preventDefault();
          const endElement = document.getElementById(sections[sections.length - 1]);
          if (endElement) {
            const headerHeight = 80;
            const elementPosition = endElement.offsetTop - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};

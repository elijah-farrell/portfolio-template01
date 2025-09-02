import styled from '@emotion/styled';
import { motion, useScroll, useSpring } from 'framer-motion';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';

const NavContainer = styled(motion.nav)`
  position: fixed;
  right: ${theme.spacing.xl};
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background: ${theme.colors.glass.background}80;
  backdrop-filter: blur(10px);
  padding: ${theme.spacing.lg};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  @media print {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }

  @media (max-width: 1669px) {
    right: ${theme.spacing.lg};
    padding: ${theme.spacing.md};
    gap: ${theme.spacing.sm};
  }

  @media (max-width: 1474px) {
    right: ${theme.spacing.md};
    padding: ${theme.spacing.sm};
    gap: ${theme.spacing.xs};
  }

  @media (max-width: 1300px) {
    right: ${theme.spacing.sm};
    padding: ${theme.spacing.xs};
    gap: ${theme.spacing.xs};
  }

  @media (max-width: 1140px) {
    right: ${theme.spacing.sm};
    padding: ${theme.spacing.xs};
    gap: ${theme.spacing.xs};
  }

  @media (max-width: ${theme.breakpoints.lg}) and (min-width: ${theme.breakpoints.md}) {
    right: ${theme.spacing.sm};
    padding: 2px;
    gap: 1px;
    border-radius: 15px;
    min-width: 6px;
  }

  @media (max-height: 500px) {
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.sm};
  }
`;

const NavDot = styled(motion.button)<{ active: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.accent};
  background: ${props => props.active ? theme.colors.accent : 'transparent'};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  position: relative;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    background: ${theme.colors.accent};
    transform: scale(1.2);
    border-color: ${theme.colors.accent};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.accent}40;
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 1669px) {
    width: 14px;
    height: 14px;
    border-width: 2px;
  }

  @media (max-width: 1474px) {
    width: 12px;
    height: 12px;
    border-width: 1.5px;
  }

  @media (max-width: 1300px) {
    width: 10px;
    height: 10px;
    border-width: 1.5px;
  }

  @media (max-width: 1140px) {
    width: 8px;
    height: 8px;
    border-width: 1px;
  }

  @media (max-width: ${theme.breakpoints.lg}) and (min-width: ${theme.breakpoints.md}) {
    width: 6px;
    height: 6px;
    border-width: 1px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: ${theme.colors.glass.card};
  color: ${theme.colors.text};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  margin-right: ${theme.spacing.sm};
  opacity: 0;
  visibility: hidden;
  transition: all ${theme.transitions.default};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid ${theme.colors.glass.border};
  pointer-events: none;
  z-index: 101;

  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid ${theme.colors.glass.card};
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }

  &::before {
    content: '';
    position: absolute;
    right: -7px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 7px solid ${theme.colors.glass.border};
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }

  @media (max-width: 1669px) {
    font-size: 0.8rem;
    padding: ${theme.spacing.xs};
    margin-right: ${theme.spacing.xs};
  }

  @media (max-width: 1474px) {
    font-size: 0.75rem;
    padding: 2px ${theme.spacing.xs};
    margin-right: ${theme.spacing.xs};
  }

  @media (max-width: 1300px) {
    font-size: 0.7rem;
    padding: 2px 4px;
    margin-right: 4px;
  }

  @media (max-width: 1140px) {
    font-size: 0.65rem;
    padding: 1px 3px;
    margin-right: 3px;
  }

  @media (max-width: ${theme.breakpoints.lg}) and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavDotWithTooltip = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.2s;
  }

  ${Tooltip} {
    transition-delay: 0s;
  }
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    ${theme.colors.accent},
    ${theme.colors.accent}dd
  );
  transform-origin: 0%;
  z-index: 1000;
  box-shadow: 0 0 10px ${theme.colors.accent}80;

  @media print {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 2px;
  }
`;

const sections = [
  'hero',
  'about',
  'experience',
  'services',
  'projects',
  'contact'
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      let currentSection = 'hero';
      
      // Check if we're at the very bottom (footer area)
      if (scrollY + windowHeight >= documentHeight - 100) {
        currentSection = 'contact';
      } else {
        // Find which section is currently in view
        let foundSection = false;
        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            // Check if section is in the center of the viewport
            if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
              currentSection = id;
              foundSection = true;
            }
          }
        });
        
        // If no section found in center, find the closest section
        if (!foundSection) {
          let closestSection = 'hero';
          let closestDistance = Infinity;
          
          sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
              const { top, bottom } = element.getBoundingClientRect();
              const center = (top + bottom) / 2;
              const viewportCenter = windowHeight / 2;
              const distance = Math.abs(center - viewportCenter);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = id;
              }
            }
          });
          
          currentSection = closestSection;
        }
      }
      
      // Update active section if it changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        // Update aria-live region
        const liveRegion = document.getElementById('section-announcer');
        if (liveRegion) {
          const displayName = currentSection === 'hero' ? 'Home' : currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
          liveRegion.textContent = `Current section: ${displayName}`;
        }
      }
    };

    // Initial call to set the correct active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Show navbar when navigating
      if (window.showNavbar) {
        window.showNavbar();
      }
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = sections.findIndex((id) => id === sectionId);
      const nextIndex = e.key === 'ArrowUp' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(sections.length - 1, currentIndex + 1);
      
      const nextSection = sections[nextIndex];
      // Show navbar when navigating
      if (window.showNavbar) {
        window.showNavbar();
      }
      const element = document.getElementById(nextSection);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = (sectionId: string) => {
    // Show navbar when clicking navigation
    if (window.showNavbar) {
      window.showNavbar();
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed header height when scrolling
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <ProgressBar 
        style={{ scaleX }} 
        role="progressbar" 
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
      />
      <div 
        id="section-announcer" 
        className="sr-only" 
        role="status" 
        aria-live="polite"
      />
      <NavContainer
        role="navigation"
        aria-label="Section navigation"
      >
        {sections.map((id) => {
          const displayName = id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1);
          return (
            <NavDotWithTooltip key={id}>
              <NavDot
                active={activeSection === id}
                onClick={() => handleNavClick(id)}
                onKeyDown={(e) => handleKeyDown(e, id)}
                data-tooltip={displayName}
                tabIndex={0}
                aria-label={`${displayName} section ${activeSection === id ? '(current section)' : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                role="button"
              />
              <Tooltip>{displayName}</Tooltip>
            </NavDotWithTooltip>
          );
        })}
      </NavContainer>
    </>
  );
};

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState, useRef, useCallback } from 'react';
import { theme } from '../../styles/theme';
import { FloatingNav } from '../navigation/FloatingNav';
import PageFooter from './Footer';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { FaBars, FaTimes } from 'react-icons/fa';

interface LayoutProps {
  children: ReactNode;
}

// Extend Window interface to include our custom function
declare global {
  interface Window {
    showNavbar?: () => void;
  }
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;
    
    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${theme.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled(motion.header)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, ${theme.colors.glass.background}, transparent);
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(90%, 1200px);
    margin-inline: auto;
    padding-inline: ${theme.spacing.md};
    position: relative;

    @media (max-width: 1024px) {
      width: min(92%, 1100px);
      padding-inline: ${theme.spacing.xl};
    }

    @media (max-width: 900px) {
      width: 95%;
      padding-inline: ${theme.spacing.xl};
    }

    @media (max-width: 768px) {
      width: 95%;
      padding-inline: ${theme.spacing.lg};
    }
  }
`;

const Logo = styled(motion.div)`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  a {
    color: ${theme.colors.primary};
    transition: all ${theme.transitions.default};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;
    font-size: 1rem;

    &:hover {
      color: ${theme.colors.accent};
      background-color: rgba(201, 184, 155, 0.1);
    }
  }

  @media (max-width: 1024px) {
    gap: ${theme.spacing.md};
    
    a {
      font-size: 0.9rem;
      padding: ${theme.spacing.xs};
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: 4px;
  transition: all ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.accent};
    background-color: rgba(201, 184, 155, 0.1);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  overflow-y: auto;

  @media (max-height: 600px) {
    padding: ${theme.spacing.md};
    justify-content: flex-start;
    padding-top: 5rem;
  }

  @media (max-height: 500px) {
    padding: ${theme.spacing.sm};
    padding-top: 4rem;
  }
`;

const MobileMenuHeader = styled.div`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};

  @media (max-height: 500px) {
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
  }
`;

const MobileMenuClose = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 2rem;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: 50%;
  transition: all ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.accent};
    background-color: rgba(201, 184, 155, 0.1);
  }

  @media (max-height: 500px) {
    font-size: 1.5rem;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  text-align: center;

  a {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: 12px;

    &:hover {
      color: ${theme.colors.accent};
      background-color: rgba(201, 184, 155, 0.1);
      transform: scale(1.05);
    }
  }

  @media (max-height: 600px) {
    gap: ${theme.spacing.md};
    
    a {
      font-size: 1.25rem;
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
    }
  }

  @media (max-height: 500px) {
    gap: ${theme.spacing.sm};
    
    a {
      font-size: 1.1rem;
      padding: ${theme.spacing.xs};
    }
  }

  @media (max-height: 400px) {
    gap: ${theme.spacing.xs};
    
    a {
      font-size: 1rem;
      padding: ${theme.spacing.xs};
    }
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  useKeyboardNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const navigationTimeout = useRef<number | null>(null);
  
  // Keyboard navigation is handled by useKeyboardNavigation hook

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position and remove styles
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isMobileMenuOpen]);

  // Function to show navbar (called from FloatingNav)
  const showNavbar = useCallback(() => {
    setIsVisible(true);
    
    // Clear any existing timeout
    if (navigationTimeout.current) {
      clearTimeout(navigationTimeout.current);
    }
    
    // Set a timeout to prevent navbar from hiding during smooth scroll
    navigationTimeout.current = setTimeout(() => {
      navigationTimeout.current = null;
    }, 2000); // 2 second delay to prevent hiding after navigation
  }, []);

  // Expose showNavbar function globally so FloatingNav can access it
  useEffect(() => {
    window.showNavbar = showNavbar;
    return () => {
      delete window.showNavbar;
    };
  }, [showNavbar]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = (sectionId: string) => {
    closeMobileMenu();
    setIsVisible(true);
    // Add a small delay to ensure the menu closes before scrolling
    setTimeout(() => {
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
    }, 150);
  };

  const handleDesktopNavClick = (sectionId: string) => {
    // Show navbar and prevent it from hiding
    showNavbar();
    
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide navbar on mobile devices
      if (window.innerWidth <= 768) {
        setIsVisible(true);
        return;
      }
      
      // Always show navbar at the top
      if (currentScrollY < 100) {
        setIsVisible(true);
        scrollDirection.current = null;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Don't hide navbar if we just clicked navigation (within timeout)
      if (navigationTimeout.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Determine scroll direction with a small threshold to prevent jitter
      const scrollDelta = currentScrollY - lastScrollY.current;
      const threshold = 5; // Minimum scroll distance to trigger direction change
      
      if (Math.abs(scrollDelta) > threshold) {
        if (scrollDelta > 0) {
          // Scrolling down
          if (scrollDirection.current !== 'down') {
            scrollDirection.current = 'down';
            setIsVisible(false);
          }
        } else if (scrollDelta < 0) {
          // Scrolling up
          if (scrollDirection.current !== 'up') {
            scrollDirection.current = 'up';
            setIsVisible(true);
          }
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }
    };
  }, []);

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>

      <Header 
        role="banner"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              Portfolio
            </Logo>
            <NavLinks role="list">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleDesktopNavClick('hero'); }}>Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleDesktopNavClick('about'); }}>About</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleDesktopNavClick('experience'); }}>Experience</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleDesktopNavClick('services'); }}>Services</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleDesktopNavClick('projects'); }}>Projects</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleDesktopNavClick('contact'); }}>Contact</a>
            </NavLinks>
            <MobileMenuButton onClick={toggleMobileMenu} aria-label="Open mobile menu">
              <FaBars />
            </MobileMenuButton>
          </div>
        </Nav>
      </Header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <MobileMenuHeader>
              <MobileMenuClose onClick={closeMobileMenu} aria-label="Close mobile menu">
                <FaTimes />
              </MobileMenuClose>
            </MobileMenuHeader>
            <MobileNavLinks role="list">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleMobileNavClick('hero'); }}>Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleMobileNavClick('about'); }}>About</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleMobileNavClick('experience'); }}>Experience</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleMobileNavClick('services'); }}>Services</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleMobileNavClick('projects'); }}>Projects</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleMobileNavClick('contact'); }}>Contact</a>
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>

      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <PageFooter />
    </LayoutWrapper>
  );
};

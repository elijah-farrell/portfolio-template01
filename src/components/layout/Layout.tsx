import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState, useRef, useCallback } from 'react';
import { theme } from '../../styles/theme';
import { FloatingNav } from '../navigation/FloatingNav';
import PageFooter from './Footer';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';

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
    padding: 0 ${theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
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

    &:hover {
      color: ${theme.colors.accent};
      background-color: rgba(201, 184, 155, 0.1);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.md};
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
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const navigationTimeout = useRef<number | null>(null);
  
  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info(
      'Keyboard Navigation:\n',
      '- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n',
      '- Home: Go to top\n',
      '- End: Go to bottom'
    );
  }, []);

  // Function to show navbar (called from FloatingNav)
  const showNavbar = useCallback(() => {
    console.log('showNavbar called, setting isVisible to true');
    setIsVisible(true);
    
    // Clear any existing timeout
    if (navigationTimeout.current) {
      clearTimeout(navigationTimeout.current);
    }
    
    // Set a timeout to prevent navbar from hiding during smooth scroll
    navigationTimeout.current = setTimeout(() => {
      navigationTimeout.current = null;
    }, 1000); // 1 second delay
  }, []);

  // Expose showNavbar function globally so FloatingNav can access it
  useEffect(() => {
    window.showNavbar = showNavbar;
    return () => {
      delete window.showNavbar;
    };
  }, [showNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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
            console.log('Scrolling DOWN, hiding navbar');
            setIsVisible(false);
          }
        } else if (scrollDelta < 0) {
          // Scrolling up
          if (scrollDirection.current !== 'up') {
            scrollDirection.current = 'up';
            console.log('Scrolling UP, showing navbar');
            setIsVisible(true);
          }
        }
      }
      
      console.log('Scroll:', { 
        currentScrollY, 
        lastScrollY: lastScrollY.current, 
        scrollDelta,
        scrollDirection: scrollDirection.current,
        isVisible,
        hasNavigationTimeout: !!navigationTimeout.current
      });
      
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
              <a href="#hero" onClick={() => setIsVisible(true)}>Home</a>
              <a href="#about" onClick={() => setIsVisible(true)}>About</a>
              <a href="#experience" onClick={() => setIsVisible(true)}>Experience</a>
              <a href="#services" onClick={() => setIsVisible(true)}>Services</a>
              <a href="#projects" onClick={() => setIsVisible(true)}>Projects</a>
              <a href="#contact" onClick={() => setIsVisible(true)}>Contact</a>
            </NavLinks>
          </div>
        </Nav>
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <PageFooter />
    </LayoutWrapper>
  );
};

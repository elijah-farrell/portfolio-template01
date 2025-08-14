import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled';

// Lazy load non-critical components
const About = lazy(() => import('./components/sections/About'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Services = lazy(() => import('./components/sections/Services'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading fallback component
const LoadingFallback = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  
  @media print {
    display: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {/* Hero section is critical for LCP, so keep it eager loaded */}
        <Hero />
        
        {/* Wrap non-critical sections in Suspense */}
        <Suspense fallback={<LoadingFallback>Loading about section...</LoadingFallback>}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading experience...</LoadingFallback>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading services...</LoadingFallback>}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading projects...</LoadingFallback>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading contact...</LoadingFallback>}>
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

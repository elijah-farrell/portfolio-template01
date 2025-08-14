import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
import pfpImage from '../../assets/pfp.jpg';
const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedin })));
const FaEnvelope = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })));
const FaTwitter = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaTwitter })));
const FaInstagram = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaInstagram })));

const HeroSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    
    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
    grid-template-columns: 1fr auto;
    gap: ${theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${theme.colors.accent};
  box-shadow: 0 12px 32px rgba(201, 184, 155, 0.3);
  background-image: url(${pfpImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
    margin: 0;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 300px;
    height: 300px;
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary};
  opacity: 0.9;
  font-weight: 500;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.primary};
  opacity: 0.8;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};
  
  a {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};
    
    &:hover {
      color: ${theme.colors.accent};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(201, 184, 155, 0.3);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
    
    a {
      font-size: 1.75rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <HeroText>
            <Title role="heading" aria-level={2}>
              Hi, I'm [Your Name]
            </Title>
            <Subtitle role="heading" aria-level={3}>
              [Your Professional Title]
            </Subtitle>
            <Description role="paragraph">
              I'm passionate about [your field] and dedicated to creating meaningful impact through [your expertise]. 
              With a background in [your background], I bring creativity, innovation, and strategic thinking to every project.
            </Description>
            <SocialLinks role="list" aria-label="Social media links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my portfolio"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaGithub aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Portfolio</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaLinkedin aria-hidden="true" />
                </Suspense>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my Twitter profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaTwitter aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my Instagram profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaInstagram aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="mailto:hello@example.com"
                aria-label="Send me an email"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                  <FaEnvelope aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Email</span>
              </a>
            </SocialLinks>
          </HeroText>
          <HeroImage />
        </HeroContent>
      </div>
    </HeroSection>
  );
};

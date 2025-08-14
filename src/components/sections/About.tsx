import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaLightbulb, FaCheckCircle, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useRef, useCallback } from 'react';
import aboutPfpImage from '../../assets/about-pfp.jpg';

interface SlideData {
  type: 'image';
  src: string;
  alt: string;
  title: string;
}

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;
  color: ${theme.colors.primary};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 85%;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.xl};
    align-items: stretch;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  flex: 1;
`;

const AboutParagraph = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  color: ${theme.colors.primary};
  opacity: 0.9;
`;

const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);
  flex-shrink: 0;

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
    margin: 0;
    flex-shrink: 0;
    align-self: center;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.glass.background};
  color: ${theme.colors.accent};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  padding: ${theme.spacing.lg};
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(201, 184, 155, 0.9);
  color: ${theme.colors.light};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  z-index: 10;

  &:hover {
    background: ${theme.colors.accent};
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: ${theme.spacing.md};
  }

  &.next {
    right: ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 35px;
    height: 35px;
    
    &.prev {
      left: ${theme.spacing.sm};
    }
    
    &.next {
      right: ${theme.spacing.sm};
    }
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: ${theme.spacing.md};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${theme.spacing.xs};
  z-index: 10;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? theme.colors.accent : 'rgba(201, 184, 155, 0.3)'};
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.accent};
    transform: scale(1.2);
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.md};
  }
`;

const ValueCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.lg};
  border-radius: 16px;
  text-align: center;
  transition: all ${theme.transitions.default};
  box-shadow: 0 4px 16px rgba(201, 184, 155, 0.15);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(201, 184, 155, 0.25);
  }

  svg {
    font-size: 2.5rem;
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.md};
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.primary};
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    color: ${theme.colors.primary};
    opacity: 0.8;
    line-height: 1.6;
  }
`;

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const slides: SlideData[] = [
    {
      type: 'image',
      src: aboutPfpImage,
      alt: 'Professional Headshot',
      title: 'Professional Headshot'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      alt: 'Team Collaboration',
      title: 'Team Collaboration'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Project Presentation',
      title: 'Project Presentation'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      alt: 'Work Environment',
      title: 'Work Environment'
    }
  ];

  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  }, [slides.length]);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer(); // Reset timer
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer(); // Reset timer
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer(); // Reset timer
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AboutSection id="about" role="region" aria-label="About Me">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          About Me
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutContent>
            <AboutText>
              <AboutParagraph>
                I'm a passionate professional with a diverse background in [your field] and a proven track record 
                of delivering exceptional results. My journey has been shaped by continuous learning, 
                innovative thinking, and a commitment to excellence in everything I do.
              </AboutParagraph>
              <AboutParagraph>
                With [X] years of experience, I've developed expertise in [key areas of expertise] and 
                have successfully led numerous projects that have made a significant impact on organizations 
                and stakeholders. I believe in the power of collaboration, creative problem-solving, and 
                strategic thinking to overcome challenges and achieve goals.
              </AboutParagraph>
              <AboutParagraph>
                When I'm not working, you can find me [personal interests/hobbies]. I'm passionate about 
                [personal passion] and believe that maintaining a healthy work-life balance is essential 
                for sustained creativity and productivity.
              </AboutParagraph>
            </AboutText>
            <ImageSlider>
              <SlideContainer>
                <AnimatePresence mode="wait">
                  <Slide
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={slides[currentSlide].src} 
                      alt={slides[currentSlide].alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </Slide>
                </AnimatePresence>
              </SlideContainer>
              <NavigationButton className="prev" onClick={prevSlide}>
                <FaChevronLeft />
              </NavigationButton>
              <NavigationButton className="next" onClick={nextSlide}>
                <FaChevronRight />
              </NavigationButton>
              <DotsContainer>
                {slides.map((_, index) => (
                  <Dot 
                    key={index}
                    active={index === currentSlide} 
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </DotsContainer>
            </ImageSlider>
          </AboutContent>
          
          <ValuesGrid>
            <ValueCard variants={itemVariants}>
              <FaUser />
              <h4>Professional</h4>
              <p>Committed to maintaining the highest standards of professionalism and ethical conduct</p>
            </ValueCard>
            <ValueCard variants={itemVariants}>
              <FaLightbulb />
              <h4>Innovative</h4>
              <p>Always seeking creative solutions and new approaches to challenges</p>
            </ValueCard>
            <ValueCard variants={itemVariants}>
              <FaCheckCircle />
              <h4>Results-Driven</h4>
              <p>Focused on achieving measurable outcomes and exceeding expectations</p>
            </ValueCard>
            <ValueCard variants={itemVariants}>
              <FaHeart />
              <h4>Passionate</h4>
              <p>Genuinely enthusiastic about my work and committed to making a positive impact</p>
            </ValueCard>
          </ValuesGrid>
        </motion.div>
      </div>
    </AboutSection>
  );
};

export default About;

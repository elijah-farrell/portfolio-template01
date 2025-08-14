import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';
import pfpImage from '../../assets/pfp.jpeg';

const TestimonialsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;
  color: ${theme.colors.primary};
  overflow: hidden;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const BackgroundIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25rem;
  color: ${theme.colors.accent};
  opacity: 0.03;
  z-index: 0;
  pointer-events: none;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 15rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.primary};
  position: relative;
  z-index: 1;
  
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

const TestimonialContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 90%;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 85%;
  }

  @media (min-width: 1200px) {
    width: 80%;
    max-width: 900px;
  }
`;

const MainTestimonial = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.xl};
  border-radius: 24px;
  box-shadow: 0 16px 64px rgba(201, 184, 155, 0.25);
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accent}80);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: calc(${theme.spacing.xl} * 1.5);
  }
`;

const QuoteIcon = styled.div`
  color: ${theme.colors.accent};
  font-size: 3rem;
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.8;
`;

const TestimonialText = styled.p`
  font-size: clamp(1.1rem, 1.3vw, 1.3rem);
  line-height: 1.8;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.primary};
  opacity: 0.95;
  font-style: italic;
  font-weight: 400;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const AuthorImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${theme.colors.accent};
  box-shadow: 0 8px 24px rgba(201, 184, 155, 0.3);
  background-image: url(${pfpImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const AuthorInfo = styled.div`
  text-align: center;
`;

const AuthorName = styled.h4`
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const AuthorTitle = styled.p`
  font-size: 1rem;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.xs};
  font-weight: 500;
`;

const AuthorCompany = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
`;

const Rating = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;

  svg {
    color: ${theme.colors.accent};
    font-size: 1.1rem;
  }
`;

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <TestimonialsSection id="testimonials" role="region" aria-label="Client Testimonial">
      <BackgroundIcon>
        <FaUser />
      </BackgroundIcon>
      
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          What People Say
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialContainer variants={itemVariants}>
            <MainTestimonial>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <TestimonialText>
                "Working with [Your Name] was an absolute pleasure. Their attention to detail and strategic thinking helped us achieve results beyond our expectations. They bring a unique perspective and innovative approach to every project, with an ability to think strategically while maintaining attention to detail that is truly remarkable. Highly recommended!"
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorImage />
                <AuthorInfo>
                  <AuthorName>Sarah Johnson</AuthorName>
                  <AuthorTitle>Marketing Director</AuthorTitle>
                  <AuthorCompany>Tech Solutions Inc.</AuthorCompany>
                  <Rating>
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </Rating>
                </AuthorInfo>
              </TestimonialAuthor>
            </MainTestimonial>
          </TestimonialContainer>
        </motion.div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;

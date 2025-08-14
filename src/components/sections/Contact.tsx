import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaCalendarAlt, 
  FaArrowRight,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaInstagram
} from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.xl};
    width: 90%;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.xl};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);

  @media (min-width: ${theme.spacing.md}) {
    padding: calc(${theme.spacing.xl} * 1.5);
  }
`;

const ContactTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const ContactText = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary};
  opacity: 0.9;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.95rem, 1.1vw, 1rem);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: rgba(201, 184, 155, 0.1);

  &:hover {
    color: ${theme.colors.accent};
    background: rgba(201, 184, 155, 0.2);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1em;
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${theme.colors.glass.background};
  border: 2px solid ${theme.colors.accent};
  border-radius: 50%;
  color: ${theme.colors.accent};
  text-decoration: none;
  transition: all ${theme.transitions.default};
  box-shadow: 0 4px 16px rgba(201, 184, 155, 0.2);

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.light};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(201, 184, 155, 0.4);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const CallToActionSection = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.xl};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.spacing.md}) {
    padding: calc(${theme.spacing.xl} * 1.5);
  }
`;

const CtaTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const CtaDescription = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary};
  opacity: 0.9;
  max-width: 500px;
`;

const HireMeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accent}80);
  color: ${theme.colors.light};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: clamp(1.1rem, 1.3vw, 1.25rem);
  transition: all ${theme.transitions.default};
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.3);
  margin-bottom: ${theme.spacing.lg};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(201, 184, 155, 0.4);
    color: ${theme.colors.light};
  }

  svg {
    transition: transform ${theme.transitions.default};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`;

const QuickLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 8px;
  transition: all ${theme.transitions.default};
  background: rgba(201, 184, 155, 0.1);
  border: 1px solid transparent;

  &:hover {
    background: rgba(201, 184, 155, 0.2);
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const Contact = () => {
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
        duration: 0.6,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <ContactSection id="contact" role="region" aria-label="Contact Information">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Get In Touch
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactContent>
            <ContactInfo variants={itemVariants}>
              <ContactTitle>Let's Connect</ContactTitle>
              <ContactText>
                I'm always open to discussing new opportunities, interesting projects, 
                and creative ideas. Whether you have a question or just want to say hi, 
                I'd love to hear from you. Let's explore how we can work together to 
                bring your vision to life.
              </ContactText>
              
              <ContactMethods>
                <ContactMethod href="mailto:hello@example.com">
                  <FaEnvelope />
                  hello@example.com
                </ContactMethod>
                <ContactMethod href="tel:+1234567890">
                  <FaPhone />
                  +1 (234) 567-890
                </ContactMethod>
                <ContactMethod href="#">
                  <FaMapMarkerAlt />
                  San Francisco, CA
                </ContactMethod>
                <ContactMethod href="https://example.com">
                  <FaGlobe />
                  example.com
                </ContactMethod>
              </ContactMethods>

              <SocialLinks>
                <SocialLink
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Twitter Profile"
                >
                  <FaTwitter />
                </SocialLink>
                <SocialLink
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram Profile"
                >
                  <FaInstagram />
                </SocialLink>
                
              </SocialLinks>
            </ContactInfo>

            <CallToActionSection variants={ctaVariants}>
              <CtaTitle>Ready to Work Together?</CtaTitle>
              <CtaDescription>
                Let's discuss your project and see how I can help bring your vision to life. 
                Book a consultation to explore opportunities and create something amazing together.
              </CtaDescription>
              <HireMeButton
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCalendarAlt />
                Hire Me
                <FaArrowRight />
              </HireMeButton>
              
              <QuickLinks>
                <QuickLink
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </QuickLink>
                <QuickLink
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Projects
                </QuickLink>
                <QuickLink
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </QuickLink>
              </QuickLinks>
            </CallToActionSection>
          </ContactContent>
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;

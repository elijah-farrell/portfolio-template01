import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(201, 184, 155, 0.2);
  padding: ${theme.spacing.xl} 0;
  color: ${theme.colors.primary};
  margin-top: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.lg};
    width: 90%;
  }
`;

const FooterSection = styled.div`
  text-align: left;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.xs};
    left: 0;
    width: 30px;
    height: 2px;
    background: ${theme.colors.accent};
    border-radius: 1px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const FooterLink = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: all ${theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  &:hover {
    color: ${theme.colors.accent};
  }

  &:hover svg {
    transform: translateX(4px);
  }

  svg {
    font-size: 0.8rem;
    opacity: 0.7;
    transition: transform ${theme.transitions.default};
  }
`;

const CompanyDescription = styled.p`
  color: ${theme.colors.secondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const LogoPlaceholder = styled.div`
  width: 120px;
  height: 40px;
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accent}80);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: ${theme.spacing.md};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.secondary};
  font-size: 0.9rem;
`;

const ContactIcon = styled.div`
  color: ${theme.colors.accent};
  font-size: 0.9rem;
  width: 16px;
  flex-shrink: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(201, 184, 155, 0.1);
  border: 1px solid rgba(201, 184, 155, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  text-decoration: none;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.light};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(201, 184, 155, 0.3);
  }
`;

const NewsletterSection = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${theme.spacing.lg};
  background: rgba(201, 184, 155, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(201, 184, 155, 0.1);
  margin-top: ${theme.spacing.lg};
`;

const NewsletterTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const NewsletterDescription = styled.p`
  color: ${theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.md};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  max-width: 400px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const NewsletterInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid rgba(201, 184, 155, 0.3);
  border-radius: 8px;
  background: ${theme.colors.glass.background};
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  
  &::placeholder {
    color: ${theme.colors.secondary};
    opacity: 0.7;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(201, 184, 155, 0.2);
  }
`;

const NewsletterButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.accent};
  color: ${theme.colors.light};
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  &:hover {
    background: ${theme.colors.accent}80;
    transform: translateY(-1px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid rgba(201, 184, 155, 0.2);
  color: ${theme.colors.secondary};
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  margin-bottom: ${theme.spacing.sm};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoPlaceholder>LOGO</LogoPlaceholder>
          <CompanyDescription>
            We help businesses and professionals achieve their goals through strategic consulting, 
            project management, and team leadership. Let's transform your vision into reality.
          </CompanyDescription>
          <SocialLinks>
            <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://github.com" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="mailto:hello@example.com" aria-label="Email">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink href="#hero">
              <FaArrowRight /> Home
            </FooterLink>
            <FooterLink href="#about">
              <FaArrowRight /> About Us
            </FooterLink>
            <FooterLink href="#experience">
              <FaArrowRight /> Experience
            </FooterLink>
            <FooterLink href="#services">
              <FaArrowRight /> Services
            </FooterLink>
            <FooterLink href="#projects">
              <FaArrowRight /> Projects
            </FooterLink>
            <FooterLink href="#contact">
              <FaArrowRight /> Contact
            </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact & Booking</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              hello@example.com
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              +1 (234) 567-890
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              San Francisco, CA
            </ContactItem>
          </ContactInfo>
          
          <FooterTitle style={{ marginTop: theme.spacing.lg }}>Book Consultation</FooterTitle>
          <FooterLink href="https://cal.com" style={{ marginTop: theme.spacing.sm }}>
            <FaArrowRight /> Schedule a Call
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Services</FooterTitle>
          <FooterLinks>
            <FooterLink href="#services">
              <FaArrowRight /> Strategic Consulting
            </FooterLink>
            <FooterLink href="#services">
              <FaArrowRight /> Project Management
            </FooterLink>
            <FooterLink href="#services">
              <FaArrowRight /> Team Leadership
            </FooterLink>
          </FooterLinks>
          
          <div style={{ marginTop: theme.spacing.lg }}>
            <FooterTitle>Cool Project</FooterTitle>
            <FooterLinks>
              <FooterLink href="#projects">
                <FaArrowRight /> Project 1
              </FooterLink>
            </FooterLinks>
          </div>
        </FooterSection>

        <NewsletterSection>
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterDescription>
            Subscribe to our newsletter for the latest insights, tips, and industry updates. 
            Join our community of professionals and stay ahead of the curve.
          </NewsletterDescription>
          <NewsletterForm>
            <NewsletterInput 
              type="email" 
              placeholder="Enter your email address"
              aria-label="Email for newsletter subscription"
            />
            <NewsletterButton type="button">
              Subscribe <FaArrowRight />
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © 2025 Developed by Elijah Farrell
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

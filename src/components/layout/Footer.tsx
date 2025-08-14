import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { FaArrowRight } from 'react-icons/fa';

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
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    width: 90%;
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

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { 
  FaLightbulb, 
  FaChartLine, 
  FaUsers, 
  FaCalendarAlt,
  FaArrowRight,
  FaQuoteLeft
} from 'react-icons/fa';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);
  transition: all ${theme.transitions.default};
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(201, 184, 155, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accent}80);
    transform: scaleX(0);
    transition: transform ${theme.transitions.default};
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing.xl};
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accent}80);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-size: 1.5rem;
  transition: all ${theme.transitions.default};

  ${ServiceCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(201, 184, 155, 0.4);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing.lg};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    margin-bottom: ${theme.spacing.lg};
  }
`;

const ServiceTitle = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.primary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.md};
  opacity: 0.9;
  font-size: clamp(0.95rem, 1.1vw, 1rem);
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  padding-left: ${theme.spacing.md};
  position: relative;
  opacity: 0.8;
  font-size: 0.9rem;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${theme.colors.accent};
    font-weight: bold;
  }
`;

const BookingSection = styled(motion.div)`
  text-align: center;
  margin-top: calc(${theme.spacing.xl} * 2);
  padding: ${theme.spacing.xl};
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BookingTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const BookingDescription = styled.p`
  color: ${theme.colors.primary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.9;
  font-size: clamp(1rem, 1.2vw, 1.1rem);
`;

const BookingButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accent}80);
  color: ${theme.colors.light};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  transition: all ${theme.transitions.default};
  box-shadow: 0 4px 16px rgba(201, 184, 155, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(201, 184, 155, 0.4);
    color: ${theme.colors.light};
  }

  svg {
    transition: transform ${theme.transitions.default};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const TestimonialSection = styled(motion.div)`
  text-align: center;
  margin-top: ${theme.spacing.xl};
  padding: ${theme.spacing.xl};
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accent}80);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-size: 1.5rem;
`;

const TestimonialQuote = styled.blockquote`
  font-size: clamp(1.1rem, 1.3vw, 1.25rem);
  color: ${theme.colors.primary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
  font-style: italic;
  opacity: 0.9;
`;

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: ${theme.colors.accent};
  font-size: 1rem;
`;

const servicesData = [
  {
    id: 1,
    title: "Strategic Consulting",
    description: "Transform your business with data-driven insights and strategic planning that drives growth and competitive advantage.",
    icon: <FaLightbulb />,
    features: [
      "Strategic planning and analysis",
      "Market research and competitive analysis",
      "Business model optimization",
      "Growth strategy development"
    ]
  },
  {
    id: 2,
    title: "Project Management",
    description: "Deliver projects on time and within budget while maintaining the highest quality standards and stakeholder satisfaction.",
    icon: <FaChartLine />,
    features: [
      "Project planning and execution",
      "Risk management and mitigation",
      "Stakeholder communication",
      "Timeline and budget control"
    ]
  },
  {
    id: 3,
    title: "Team Leadership",
    description: "Build and lead high-performing teams that consistently deliver exceptional results and drive organizational success.",
    icon: <FaUsers />,
    features: [
      "Team building and development",
      "Performance management",
      "Conflict resolution",
      "Leadership development"
    ]
  }
];

const Services = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const bookingVariants = {
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

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  return (
    <ServicesSection id="services" role="region" aria-label="Professional Services">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Services I Offer
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid role="list">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                variants={itemVariants}
                role="listitem"
              >
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures role="list">
                  {service.features.map((feature, index) => (
                    <ServiceFeature key={index} role="listitem">
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <BookingSection variants={bookingVariants}>
            <BookingTitle>Ready to Work Together?</BookingTitle>
            <BookingDescription>
              Let's discuss how I can help you achieve your goals. Book a consultation 
              to explore opportunities and create a customized plan for your success.
            </BookingDescription>
            <BookingButton
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt />
              Book a Consultation
              <FaArrowRight />
            </BookingButton>
          </BookingSection>

          <TestimonialSection variants={testimonialVariants}>
            <TestimonialIcon>
              <FaQuoteLeft />
            </TestimonialIcon>
            <TestimonialQuote>
              "Working with [Your Name] was a game-changer for our business. Their strategic insights 
              and professional approach helped us achieve results we never thought possible. 
              Highly recommended for anyone looking to take their business to the next level."
            </TestimonialQuote>
            <TestimonialAuthor>
              — Sarah Johnson, CEO at TechCorp
            </TestimonialAuthor>
          </TestimonialSection>
        </motion.div>
      </div>
    </ServicesSection>
  );
};

export default Services;

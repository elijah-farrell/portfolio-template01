import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  width: 95%;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, ${theme.colors.accent}, ${theme.colors.accent}80);
    transform: translateX(-50%);

    @media (max-width: ${theme.breakpoints.md}) {
      left: 20px;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 90%;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${theme.spacing.xl};
  width: 45%;

  &:nth-of-type(odd) {
    left: 0;
    text-align: right;

    @media (max-width: ${theme.breakpoints.md}) {
      left: 0;
      width: 100%;
      text-align: left;
      padding-left: 50px;
    }
  }

  &:nth-of-type(even) {
    left: 55%;
    text-align: left;

    @media (max-width: ${theme.breakpoints.md}) {
      left: 0;
      width: 100%;
      padding-left: 50px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    border: 3px solid ${theme.colors.light};
    box-shadow: 0 0 0 3px ${theme.colors.accent}40;

    @media (max-width: ${theme.breakpoints.md}) {
      left: 12px;
    }
  }

  &:nth-of-type(odd)::before {
    right: -8px;

    @media (max-width: ${theme.breakpoints.md}) {
      right: auto;
      left: 12px;
    }
  }

  &:nth-of-type(even)::before {
    left: -8px;

    @media (max-width: ${theme.breakpoints.md}) {
      left: 12px;
    }
  }
`;

const ExperienceCard = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.lg};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(201, 184, 155, 0.2);
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(201, 184, 155, 0.3);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const JobTitle = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const Company = styled.h4`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.accent};
  font-weight: 500;
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  font-size: 0.9rem;
  color: ${theme.colors.secondary};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.xs};
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  svg {
    color: ${theme.colors.accent};
  }
`;

const JobDescription = styled.p`
  color: ${theme.colors.primary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.md};
  opacity: 0.9;
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Achievement = styled.li`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  padding-left: ${theme.spacing.md};
  position: relative;
  opacity: 0.9;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${theme.colors.accent};
    font-weight: bold;
  }
`;

const experienceData = [
  {
    id: 1,
    title: "Senior [Your Role]",
    company: "[Company Name]",
    location: "[City, State]",
    period: "2022 - Present",
    description: "Leading strategic initiatives and driving organizational growth through innovative solutions and team leadership.",
    achievements: [
      "Increased team productivity by 40% through process optimization",
      "Led cross-functional projects resulting in $2M+ in cost savings",
      "Mentored 5 team members, 3 of whom were promoted within 12 months",
      "Developed and implemented new strategies that improved customer satisfaction by 35%"
    ]
  },
  {
    id: 2,
    title: "[Your Role]",
    company: "[Previous Company]",
    location: "[City, State]",
    period: "2020 - 2022",
    description: "Managed key projects and contributed to business development while maintaining high quality standards.",
    achievements: [
      "Successfully delivered 15+ projects on time and within budget",
      "Improved client retention rates by 25% through relationship building",
      "Collaborated with marketing team to increase brand awareness by 60%",
      "Streamlined workflows resulting in 30% faster project completion"
    ]
  },
  {
    id: 3,
    title: "[Your Role]",
    company: "[Earlier Company]",
    location: "[City, State]",
    period: "2018 - 2020",
    description: "Built foundational skills and contributed to team success while learning industry best practices.",
    achievements: [
      "Supported 20+ client projects with 95% satisfaction rate",
      "Developed new processes that reduced errors by 45%",
      "Participated in professional development programs",
      "Contributed to team initiatives that improved overall efficiency"
    ]
  }
];

const Experience = () => {
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

  return (
    <ExperienceSection id="experience" role="region" aria-label="Work Experience">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Work Experience
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline role="list">
            {experienceData.map((job, index) => (
              <TimelineItem 
                key={job.id} 
                variants={itemVariants}
                role="listitem"
              >
                <ExperienceCard>
                  <JobTitle>{job.title}</JobTitle>
                  <Company>{job.company}</Company>
                  <JobMeta>
                    <MetaItem>
                      <FaCalendarAlt />
                      <span>{job.period}</span>
                    </MetaItem>
                    <MetaItem>
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </MetaItem>
                  </JobMeta>
                  <JobDescription>{job.description}</JobDescription>
                  <Achievements role="list">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <Achievement key={achievementIndex} role="listitem">
                        {achievement}
                      </Achievement>
                    ))}
                  </Achievements>
                </ExperienceCard>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;

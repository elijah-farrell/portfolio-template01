import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
    width: 80%;
    max-width: 1200px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.primary};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(201, 184, 155, 0.2);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: ${theme.colors.glass.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  border: 2px solid rgba(201, 184, 155, 0.2);
  margin-bottom: ${theme.spacing.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    height: 180px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.sm};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.primary};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(201, 184, 155, 0.3);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(201, 184, 155, 0.2);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projectsData = [
  {
    id: 1,
    title: "Strategic Business Transformation",
    description: "Led a comprehensive digital transformation initiative for a Fortune 500 company, resulting in 40% efficiency improvement and $2M annual cost savings.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    imagePlaceholder: "Business transformation dashboard or process flow diagram",
    technologies: ["Strategic Planning", "Change Management", "Performance Metrics"],
    link: "#"
  },
  {
    id: 2,
    title: "Cross-Functional Team Leadership",
    description: "Managed a diverse team of 15 professionals across multiple departments, delivering a complex project 3 weeks ahead of schedule and 20% under budget.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    imagePlaceholder: "Team collaboration meeting or project timeline visualization",
    technologies: ["Team Leadership", "Project Management", "Stakeholder Communication"],
    link: "#"
  },
  {
    id: 3,
    title: "Process Optimization Initiative",
    description: "Redesigned core business processes that reduced operational costs by 35% while improving customer satisfaction scores by 25%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    imagePlaceholder: "Process flow chart or optimization metrics dashboard",
    technologies: ["Process Analysis", "Lean Methodology", "Data Analytics"],
    link: "#"
  },
  {
    id: 4,
    title: "Performance Coaching Program",
    description: "Developed and implemented a comprehensive coaching program that improved team productivity by 30% and employee retention by 40%.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    imagePlaceholder: "Coaching session or performance improvement charts",
    technologies: ["Leadership Development", "Performance Management", "Training Design"],
    link: "#"
  }
];

const Projects = () => {
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
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectImage 
                role="img" 
                aria-label={`Screenshot of ${project.title}`} 
              >
                {project.image ? (
                  <img src={project.image} alt={`Screenshot of ${project.title}`} />
                ) : (
                  project.imagePlaceholder
                )}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech} role="listitem">{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span className="sr-only">GitHub repository</span>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span className="sr-only">Live site</span>
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;

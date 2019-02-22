import styled from 'styled-components';
import { Label } from './styles';
import { GitHub, External } from './icons';

const Project = styled.div`
  grid-column: 1 / -1;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-column: span 6;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-column: span 4;
  }

  &:hover > div {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const ProjectInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray200};
  padding: 1.5rem;
  border-radius: 2px;
  transition-property: box-shadow, transform;
  transition-duration: calc(${({ theme }) => theme.transition.duration} * 2);
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};
  will-change: box-shadow, transform;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ProjectNumber = styled(Label)`
  color: ${({ theme }) => theme.primary};
`;

const ProjectIcons = styled.div`
  align-items: center;
  display: flex;

  a {
    color: ${({ theme }) => theme.color.gray500};
    margin-right: 1rem;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &:last-of-type {
      margin-right: 0;
    }

    svg {
      fill: currentColor;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const ProjectBody = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.375em;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.gray600};
  }
`;

const ProjectFooter = styled.div`
  margin-top: auto;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      font-family: ${({ theme }) => theme.fontFamily.mono};
      font-size: 0.75em;
      margin-right: 0.875rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const SingleProject = ({ project, number }) => (
  <Project>
    <ProjectInner>
      <ProjectHeader>
        <ProjectNumber>{`${`0${number + 1}`.slice(-2)}.`}</ProjectNumber>
        <ProjectIcons>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="External link"
            >
              <External />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
          )}
        </ProjectIcons>
      </ProjectHeader>
      <ProjectBody>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </ProjectBody>
      <ProjectFooter>
        <ul>
          {project.tech.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </ProjectFooter>
    </ProjectInner>
  </Project>
);

export default SingleProject;

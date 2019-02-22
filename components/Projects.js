import SingleProject from './SingleProject';
import { SectionStyles, FullGrid, ContentStyles, Heading } from './styles';
import { projectData } from '../data';

const Projects = () => (
  <SectionStyles id="projects">
    <FullGrid>
      <Heading>What I've Built</Heading>
    </FullGrid>
    <FullGrid>
      <ContentStyles>
        <p>
          Some examples of my work. To see more, please visit my{' '}
          <a
            href="https://github.com/chrismlusk?tab=repositories"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </ContentStyles>
    </FullGrid>
    {projectData.map((project, index) => (
      <SingleProject key={index} project={project} number={index} />
    ))}
  </SectionStyles>
);

export default Projects;

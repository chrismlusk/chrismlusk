import React from 'react';
import SingleProject from './SingleProject';
import {
  SectionStyles,
  FullGrid,
  ContentStyles,
  Heading
} from './styles';
import { projectData } from '../data';

const Projects = () => (
  <SectionStyles id="projects">
    <FullGrid>
      <Heading>What I've Built</Heading>
    </FullGrid>
    <FullGrid>
      <ContentStyles>
        <p>A few examples of my work. For more, please visit my <a href="https://github.com/chrismlusk" target="_blank" rel="nofollow noopener noreferrer">GitHub</a>.</p>
      </ContentStyles>
    </FullGrid>
    {projectData.map(project => (
      <SingleProject key={project.id} project={project} />
    ))}
  </SectionStyles>
);

export default Projects;

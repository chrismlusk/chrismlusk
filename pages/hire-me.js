import styled from 'styled-components';
import {
  SectionStyles,
  FullGrid,
  ContentStyles,
  LeadGraph,
  Highlight,
  wave
} from '../components/styles';

const Wave = styled.span`
  display: inline-block;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-right: 4rem;
  }

  .wave {
    cursor: default;
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(-5rem, -50%, 0);
    transition: ${({ theme }) => theme.transition.base};
  }

  .wave-icon {
    font-size: 0.875em;
    display: block;
    transform-origin: 50% 90%;
  }

  &:hover {
    .wave {
      opacity: 1;
      transform: translate3d(0, -50%, 0);
    }

    .wave-icon {
      animation: ${wave} 120ms ease-in-out alternate infinite;
    }
  }
`;

const LeadBlurb = styled(LeadGraph)`
  padding-bottom: 1em;
  border-bottom: 5px solid ${({ theme }) => theme.color.gray200};
`;

const HireMe = () => (
  <SectionStyles>
    <FullGrid>
      <ContentStyles>
        <h1>
          <Wave>
            Hi! I'm <Highlight>Chris Lusk</Highlight>.
            <span className="wave" aria-hidden="true">
              <span className="wave-icon">👋🏼</span>
            </span>
          </Wave>
        </h1>
        <LeadBlurb>
          I'm a full-stack software developer who enjoys working at the
          intersection of engineering and design. I'm ready for a new
          opportunity. Let's work together!
        </LeadBlurb>
        <h2>What</h2>
        <p>I'm looking for a full-stack engineering role.</p>
        <p>Ideally you:</p>
        <ul>
          <li>Have a diverse team with diverse leadership</li>
          <li>Pay your staff fairly with no wage discrimination</li>
          <li>Have product, design, and engineering teams that collaborate</li>
          <li>Offer professional development opportunities</li>
          <li>Have great work/life balance</li>
          <li>Provide vacation, parental leave, and 401k matching</li>
        </ul>

        <h2>When</h2>
        <p>I am available January 2019.</p>

        <h2>Where</h2>
        <p>Chicago, Illinois. I am open to remote positions.</p>

        <h2>Why</h2>
        <p>
          I'm a developer with experience throughout the whole stack. I value
          pair programming and mentoring, so collaboration with colleagues is
          essential to me. I have a deep understanding of design, and I care
          about building intuitive user experiences. I enjoy writing CSS. I
          believe accessibility and performance are vital because the internet
          should be available to everyone. I love learning new technologies, but
          we should be more concerned with choosing the right tool for the job.
        </p>

        <p>
          I have experience working with JavaScript, CSS/Sass, React, Redux,
          Node, Express, and more.
        </p>
        <p>
          If you think I would be a good fit for your team, please email me at
          chrismlusk[at]gmail.com.
        </p>
        <p>
          For more details about my past work, please see my{' '}
          <a
            href="/static/resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            resume
          </a>
          .
        </p>
      </ContentStyles>
    </FullGrid>
  </SectionStyles>
);

export default HireMe;

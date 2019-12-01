import styled from 'styled-components';
import { SectionStyles, FullGrid, ContentStyles } from './styles';

const WelcomeStyles = styled(ContentStyles)`
  max-width: 380px;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    max-width: 580px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: 700px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    max-width: 820px;
  }
`;

const MyTitle = styled.div`
  color: inherit;
  font-size: 2.25em;
  font-weight: 700;
  line-height: 1.1;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 3.75em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 4.125em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 4.5em;
  }

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const MyBlurb = styled.p`
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-top: 2rem;
  }
`;

const Welcome = () => (
  <SectionStyles id="welcome">
    <FullGrid>
      <WelcomeStyles>
        <MyTitle>
          Hi, my name is <span>Chris Lusk</span>. I build things for people.
        </MyTitle>
        <MyBlurb>
          I'm a web developer based in Chicago who enjoys thinking about
          accessibility and progressive enhancement, and I work at{' '}
          <a
            href="https://onedesigncompany.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            One Design Company
          </a>
          .
        </MyBlurb>
      </WelcomeStyles>
    </FullGrid>
  </SectionStyles>
);

export default Welcome;

import styled from 'styled-components';
import { jellyPop, ContainerStyles } from './styles';
import { GitHub, LinkedIn, Instagram, Twitter } from './icons';

const SocialLinks = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    position: fixed;
      right: 2rem;
      bottom: 0;
    width: 2.5rem;
    z-index: 9;
  }
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;

    &::after {
      background-color: ${({ theme }) => theme.color.gray300};
      content: '';
      width: 1px;
      height: 6rem;
    }
  }
`;

const SocialItem = styled.li`

  &:last-of-type {
    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      margin-bottom: 1rem;
    }
  }

  a {
    align-items: center;
    color: ${({ theme }) => theme.color.gray500};
    display: flex;
    justify-content: center;
    position: relative;
    width: 3rem;
    height: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      padding: .5rem;
      width: 2.5rem;
      height: 2.5rem;
    }

    &::before {
      background-color: ${({ theme }) => theme.primary};
      border-radius: 50%;
      content: '';
      display: block;
      opacity: 0;
      position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.color.white};

      &::before {
        animation: ${jellyPop} 860ms linear both;
      }
    }
  }

  svg {
    fill: currentColor;
    width: 1.5rem;
    height: 1.5rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const FooterStyles = styled.footer`
  align-items: center;
  background-color: ${({theme}) => theme.color.gray100};
  color: ${({theme}) => theme.color.gray600};
  display: flex;
  min-height: 6rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    min-height: 4rem;
  }

  p {
    font-size: .75rem;
    margin: .5em 0 .25em;
  }
`;

const FooterLinks = () => (
  <SocialLinks>
    <SocialList>
      <SocialItem>
        <a href="https://github.com/chrismlusk" target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub" className="social-link">
          <GitHub />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://linkedin.com/in/chrismlusk" target="_blank" rel="nofollow noopener noreferrer" aria-label="LinkedIn" className="social-link">
          <LinkedIn />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://instagram.com/chrismlusk" target="_blank" rel="nofollow noopener noreferrer" aria-label="Instagram" className="social-link">
          <Instagram />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://twitter.com/chrismlusk" target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter" className="social-link">
          <Twitter />
        </a>
      </SocialItem>
    </SocialList>
  </SocialLinks>
);

const Footer = () => (
  <FooterStyles>
    <ContainerStyles>
      <FooterLinks />
      <p>&copy; {(new Date()).getFullYear()} by Chris Lusk</p>
    </ContainerStyles>
  </FooterStyles>
);

export default Footer;

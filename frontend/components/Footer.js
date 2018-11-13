import styled from 'styled-components';
import { ContainerStyles } from './styles';
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
    color: ${({ theme }) => theme.color.gray500};
    display: block;
    padding: .75rem 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      padding: .5rem;
    }

    &:hover {
      color: ${({ theme }) => theme.primary};
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
      <p>&copy; 2018 by Chris Lusk</p>
    </ContainerStyles>
  </FooterStyles>
);

export default Footer;

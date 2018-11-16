import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  SectionStyles,
  ContentStyles,
  FullGrid,
  HalfGrid,
  Heading,
  LeadGraph
} from './styles';

const MyFigure = styled.figure`
  position: relative;

  .hidden-img {
    opacity: 0;
    position: absolute;
      top: 50%;
      left: 0;
    transform: translateY(-50%);
  }

  &.show-hidden {
    .chris-img {
      opacity: 0;
    }

    .hidden-img {
      opacity: 1;
    }
  }
`;

const Secret = styled.span`
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-weight: 700;
  }
`;

class AboutMe extends Component {
  figure = React.createRef();

  state = {
    imgUrl: '/static/images/me_2018_bw.jpg',
    hiddenImgUrl: ''
  }

  hideHidden = () => {
    this.setState({ hiddenImgUrl: '' });
    this.figure.current.classList.remove('show-hidden');
  }

  showHidden = type => {
    this.setState({ hiddenImgUrl: `/static/images/${type}-cat.gif` });
    this.figure.current.classList.add('show-hidden');
  }

  render() {
    return (
      <Fragment>
        <Head>
          <link
            rel="preload"
            href="/static/images/computer-cat.gif"
            as="image"
          />
          <link
            rel="preload"
            href="/static/images/keyboard-cat.gif"
            as="image"
          />
          <link
            rel="preload"
            href="/static/images/reading-cat.gif"
            as="image"
          />
        </Head>
        <SectionStyles id="about">
          <FullGrid>
            <Heading>About Me</Heading>
          </FullGrid>
          <HalfGrid>
            <ContentStyles>
              <LeadGraph>
                I'm a software developer with a background in design and journalism.
              </LeadGraph>

              <p>My first job after college was as a news designer for the <a href="https://www.ocregister.com" target="_blank" rel="nofollow noopener noreferrer">Orange County Register</a>, where I was fortunate to have supportive bosses who let me join the digital team as a web designer. That experience got me hooked on HTML and CSS, and I decided to change careers.</p>

              <p>After honing my front-end skills at <a href="https://www.accuraty.com" target="_blank" rel="nofollow noopener noreferrer">Accuraty Solutions</a>, I attended <a href="https://www.fullstackacademy.com" target="_blank" rel="nofollow noopener noreferrer">Fullstack Academy</a> in Chicago to better learn full-stack development. I work there now as a teaching fellow helping bootcamp students learn JavaScript.</p>

              <p>When I'm not <Secret onMouseEnter={() => this.showHidden('computer')} onMouseLeave={this.hideHidden}>messing around</Secret> with new CSS features, I like to <Secret onMouseEnter={() => this.showHidden('reading')} onMouseLeave={this.hideHidden}>read books</Secret>, listen to podcasts, <Secret onMouseEnter={() => this.showHidden('keyboard')} onMouseLeave={this.hideHidden}>play music</Secret>, and catch up on TV shows I forgot to watch.</p>
            </ContentStyles>
          </HalfGrid>
          <HalfGrid>
            <MyFigure ref={this.figure}>
              <img
                src={this.state.imgUrl}
                className="chris-img"
                alt="Chris Lusk"
              />
              <img
                src={this.state.hiddenImgUrl}
                className="hidden-img"
                alt=""
              />
            </MyFigure>
          </HalfGrid>
        </SectionStyles>
      </Fragment>
    );
  }
};

export default AboutMe;

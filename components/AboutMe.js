import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import {
  SectionStyles,
  ContentStyles,
  FullGrid,
  HalfGrid,
  Heading,
  LeadGraph
} from './styles';

const defaultImage = '/static/images/me_2018_bw.jpg';

class AboutMe extends Component {
  state = {
    imgUrl: defaultImage
  }

  showDefault = () => {
    this.setState({ imgUrl: defaultImage });
  }

  showComputerCat = () => {
    this.setState({ imgUrl: '/static/images/computer-cat.gif' });
  }

  showKeyboardCat = () => {
    this.setState({ imgUrl: '/static/images/keyboard-cat.gif' });
  }

  showReadingCat = () => {
    this.setState({ imgUrl: '/static/images/reading-cat.gif' });
  }

  render() {
    return (
      <Fragment>
        <Head>
          <link rel="preload" href="/static/images/computer-cat.gif" as="image" />
          <link rel="preload" href="/static/images/keyboard-cat.gif" as="image" />
          <link rel="preload" href="/static/images/reading-cat.gif" as="image" />
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

              <p>When I'm not <strong onMouseEnter={this.showComputerCat} onMouseLeave={this.showDefault}>messing around</strong> with new CSS features, I like to <strong onMouseEnter={this.showReadingCat} onMouseLeave={this.showDefault}>read books</strong>, listen to podcasts, <strong onMouseEnter={this.showKeyboardCat} onMouseLeave={this.showDefault}>play music</strong>, and catch up on TV shows I forgot to watch.</p>
            </ContentStyles>
          </HalfGrid>
          <HalfGrid>
            <figure>
              <img src={this.state.imgUrl} alt="Chris Lusk" />
            </figure>
          </HalfGrid>
        </SectionStyles>
      </Fragment>
    );
  }
};

export default AboutMe;

import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { theme, GlobalStyles, ContainerStyles } from './styles';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Meta />
          <Header />
          <Main>
            {this.props.children}
          </Main>
          <Footer />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;

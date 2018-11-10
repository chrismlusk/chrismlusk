import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import { theme, ResetStyles, GlobalStyles, ContainerStyles } from './styles';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <ResetStyles />
          <GlobalStyles />
          <Meta />
          <Header />
          <main>{this.props.children}</main>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;

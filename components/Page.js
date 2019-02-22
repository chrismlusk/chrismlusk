import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { theme, GlobalStyles } from './styles';

const Page = props => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Meta />
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Page;

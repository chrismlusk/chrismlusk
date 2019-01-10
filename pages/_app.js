import App, { Container } from 'next/app';
import Router from 'next/router';
import { Page } from '../components';
import { trackPageView } from '../utils';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      Router.events.on('routeChangeComplete', url => trackPageView(url));
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default MyApp;

import App from 'next/app';
import Router from 'next/router';
import { Page } from '../components';
import { trackPageView } from '../utils';

class MyApp extends App {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      Router.events.on('routeChangeComplete', url => trackPageView(url));
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{__html:`
            @font-face {
              font-family: 'ATC Overlook';
              src: url('/static/fonts/atcoverlook-bold.woff2') format('woff2'),
                   url('/static/fonts/atcoverlook-bold.woff') format('woff');
              font-weight: 700;
              font-style: normal;
            }

            @font-face {
              font-family: 'ATC Overlook';
              src: url('/static/fonts/atcoverlook-regular.woff2') format('woff2'),
                   url('/static/fonts/atcoverlook-regular.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'ATC Overlook';
              src: url('/static/fonts/atcoverlook-thin.woff2') format('woff2'),
                   url('/static/fonts/atcoverlook-thin.woff') format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'Fira Mono';
              src: url('/static/fonts/firamono-regular.woff2') format('woff2'),
                   url('/static/fonts/firamono-regular.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
          `}}/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

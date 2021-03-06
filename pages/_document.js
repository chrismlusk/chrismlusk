import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { MY_IMG_URL } from '../config';

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
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: 'ATC Overlook';
                  font-display: swap;
                  src: url('/fonts/atcoverlook-bold.woff2') format('woff2'),
                      url('/fonts/atcoverlook-bold.woff') format('woff');
                  font-weight: 700;
                  font-style: normal;
                }

                @font-face {
                  font-family: 'ATC Overlook';
                  font-display: swap;
                  src: url('/fonts/atcoverlook-regular.woff2') format('woff2'),
                      url('/fonts/atcoverlook-regular.woff') format('woff');
                  font-weight: normal;
                  font-style: normal;
                }

                @font-face {
                  font-family: 'ATC Overlook';
                  font-display: swap;
                  src: url('/fonts/atcoverlook-thin.woff2') format('woff2'),
                      url('/fonts/atcoverlook-thin.woff') format('woff');
                  font-weight: 300;
                  font-style: normal;
                }

                @font-face {
                  font-family: 'Fira Mono';
                  font-display: swap;
                  src: url('/fonts/firamono-regular.woff2') format('woff2'),
                      url('/fonts/firamono-regular.woff') format('woff');
                  font-weight: normal;
                  font-style: normal;
                }
              `
            }}
          />
          {this.props.styleTags}
          <link rel="prefetch" href={MY_IMG_URL} as="image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

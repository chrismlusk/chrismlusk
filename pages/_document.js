/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-danger */

import { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GOOGLE_ID, MY_IMG_URL } from '../config';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    const isProduction = process.env.NODE_ENV === 'production';
    return { ...page, styleTags, isProduction };
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ID}');
      `
    };
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
                  src: url('/fonts/atcoverlook-bold.woff2') format('woff2'),
                      url('/fonts/atcoverlook-bold.woff') format('woff');
                  font-weight: 700;
                  font-style: normal;
                }

                @font-face {
                  font-family: 'ATC Overlook';
                  src: url('/fonts/atcoverlook-regular.woff2') format('woff2'),
                      url('/fonts/atcoverlook-regular.woff') format('woff');
                  font-weight: normal;
                  font-style: normal;
                }

                @font-face {
                  font-family: 'ATC Overlook';
                  src: url('/fonts/atcoverlook-thin.woff2') format('woff2'),
                      url('/fonts/atcoverlook-thin.woff') format('woff');
                  font-weight: 300;
                  font-style: normal;
                }

                @font-face {
                  font-family: 'Fira Mono';
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
          {this.props.isProduction && (
            <Fragment>
              <script
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`}
                defer
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} defer />
            </Fragment>
          )}
        </body>
      </html>
    );
  }
}

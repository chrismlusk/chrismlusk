import Head from 'next/head';
import { DEFAULT_SEO as SEO } from '../config';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <title key="title">{SEO.title}</title>
    <meta key="description" name="description" content={SEO.description} />
    <meta
      key="twitter:card"
      name="twitter:card"
      content={SEO.twitter.cardType}
    />
    <meta key="twitter:site" name="twitter:site" content={SEO.twitter.handle} />
    <meta key="og:url" name="og:url" content={SEO.openGraph.url} />
    <meta key="og:type" name="og:type" content={SEO.openGraph.type} />
    <meta key="og:title" name="og:title" content={SEO.openGraph.title} />
    <meta
      key="og:description"
      name="og:description"
      content={SEO.openGraph.description}
    />
    <meta key="og:locale" name="og:locale" content={SEO.openGraph.locale} />
  </Head>
);

export default Meta;

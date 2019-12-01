import Head from 'next/head';
import { DEFAULT_SEO as SEO } from '../config';

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" href="/favicon.png" type="img/png" />
    <title key="title">{SEO.title}</title>
    <meta key="description" name="description" content={SEO.description} />
    <meta key="og:site_name" name="og:site_name" content={SEO.site_name} />
    <meta key="og:title" name="og:title" content={SEO.openGraph.title} />
    <meta key="og:url" name="og:url" content={SEO.openGraph.url} />
    <meta key="og:type" name="og:type" content={SEO.openGraph.type} />
    <meta
      key="og:description"
      name="og:description"
      content={SEO.openGraph.description}
    />
    <meta key="og:locale" name="og:locale" content={SEO.openGraph.locale} />
    <meta
      key="twitter:card"
      name="twitter:card"
      content={SEO.twitter.cardType}
    />
    <meta key="twitter:site" name="twitter:site" content={SEO.twitter.handle} />
  </Head>
);

export default Meta;

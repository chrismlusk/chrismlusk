import { GOOGLE_ID } from './config';

export function trackPageView(url) {
  try {
    window.gtag('config', `${GOOGLE_ID}`, {
      page_location: url
    });
  } catch (err) {
    console.warn(err);
  }
}

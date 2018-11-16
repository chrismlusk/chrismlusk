export function trackPageView(url) {
  try {
    window.gtag('config', 'UA-129304778-1', {
      page_location: url
    });
  } catch (err) {
    console.error(err);
  }
}

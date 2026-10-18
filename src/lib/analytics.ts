// Client-safe GA4 helpers. gtag is defined by <Analytics/> only when
// NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so trackEvent() is a harmless no-op
// otherwise. Mark the events below as key events in GA4.

type GtagParams = Record<string, string | number | boolean>;

export function trackEvent(action: string, params?: GtagParams) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', action, params ?? {});
}

/**
 * GA4 event for a click on a tel:/mailto: link, or null for any other link.
 * phone_click / email_click carry the link and the page it was clicked on.
 */
export function contactClickEvent(
  href: string,
  page: string,
): { name: 'phone_click' | 'email_click'; params: GtagParams } | null {
  const lower = href.toLowerCase();
  if (lower.startsWith('tel:')) return { name: 'phone_click', params: { link_url: href, page } };
  if (lower.startsWith('mailto:')) return { name: 'email_click', params: { link_url: href, page } };
  return null;
}

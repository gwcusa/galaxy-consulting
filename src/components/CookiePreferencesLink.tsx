'use client';

/** Footer control that reopens the cookie banner so a choice can be changed. */
export const COOKIE_PREFS_EVENT = 'gc-cookie-preferences';

export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_PREFS_EVENT))}
      className="hover:text-blue-bright transition-colors"
    >
      Cookie preferences
    </button>
  );
}

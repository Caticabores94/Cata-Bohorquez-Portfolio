# Predeploy Smoke Checklist

- Run `npm run release:check`.
- Verify `/`, `/about`, `/experience`, `/projects`, and `/contact` load correctly on desktop.
- Verify the same routes on mobile width and confirm the mobile navigation opens, closes, and locks body scroll correctly.
- Open at least one detail page under `/experience/:slug` and `/projects/:slug` from a direct URL, then refresh to confirm the host rewrite works.
- Click every external portfolio link and confirm it opens the intended live site in a new tab.
- Check the homepage hero and contact sections on a slower connection or mobile device to confirm the poster-image fallback feels acceptable.
- Confirm the contact links for phone, email, and LinkedIn work from both desktop and mobile layouts.
- Spot-check the browser-tab titles for home, about, experience, projects, contact, and one detail page.

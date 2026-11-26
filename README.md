# STILL / MOTION — Swiss minimalism portfolio

Next.js App Router, TypeScript, Tailwind CSS 3, responsive editorial CSS. English-language one-page portfolio with six explicitly fictional concept projects.

## Run locally
Requires Node.js 22 LTS and npm. From the extracted `still-motion-swiss` directory:

```sh
npm install
npm run dev
```
Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm start
```

## Personalize
Edit `lib/content.ts` to set your studio name, mark, role, location, tagline, real email, portrait, client list and social URLs. The tagline splits on ` & ` for a bold second line. Empty contact/social fields are intentionally non-interactive. Replace all fictional project names, dates, credits and reference images with your own work. Put local media in `public/media/` and refer to it with `/media/filename.ext`. Photo galleries use `gallery: ['/media/photo-2.jpg', ...]` (cover is automatically included). Films use `video: '/media/film.mp4'` or a direct HTTPS MP4/WebM URL; showreel uses `studio.showreel`. Vimeo page URLs are not direct video URLs. Prefer compressed H.264 MP4 with web-optimized metadata, posters, and captions where dialogue is present. Large films should use dedicated video hosting. Hero autoplays muted when a video is supplied; modal uses accessible native controls. No video assets are bundled.

Remote demo photography is loaded from Unsplash, and fonts from Google Fonts; both require internet. Replace with your own licensed assets and optionally self-host fonts before public launch. Next Image optimizes local and permitted remote images; add any new image hostname to `next.config.mjs`.

## Deploy
Push the folder to a Git repository, import into Vercel as a Next.js project, and deploy. No API keys, database or server secrets needed. Before going live, verify the build, mobile layout, keyboard interaction, video playback, metadata, permissions for imagery, and actual contact destinations. For deployment elsewhere, use a Node host supporting Next.js image optimization.

## Structure
- `app/`: layout, metadata, page and global Swiss design system
- `components/Portfolio.tsx`: filterable work, reels, native dialog gallery/video, contact interaction
- `lib/content.ts`: editable content
- `public/media/`: place original assets here

## Verification status
Source assembled in the authoring environment; dependency installation and browser/build validation may require internet access. See delivery message for actual verification performed. No claim of WCAG certification or successful deployment is made.

## Swiss visual direction
Inter typography, 12-column desktop grid with 7/5 modules, persistent project numbers, thin rules, small oxblood index accent, square controls, and single-column mobile layouts.

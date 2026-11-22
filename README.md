# Priyansh Pal — Portfolio

A dark, cinematic, responsive portfolio built with Next.js, Tailwind CSS and Framer Motion. Deploy-ready for Vercel.

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Customize before launch
1. Replace the demo project content and image URLs in `data/projects.ts` with your real work.
2. Replace the generic Unsplash hero image in `app/page.tsx`.
3. Update the email address `hello@priyanshpal.com` in `components/Nav.tsx`, `app/page.tsx` and the project detail page.
4. Replace Instagram and LinkedIn URLs in the footer.
5. Update metadata and the canonical domain in `app/layout.tsx`.
6. Add your own favicon and social preview image in `app/`.

## Deploy to Vercel
1. Create a new GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Keep the detected Next.js framework settings.
4. Click **Deploy**.
5. Add your custom domain later under **Project → Settings → Domains**.

## Project structure
```text
app/
  globals.css
  layout.tsx
  page.tsx
  projects/[slug]/page.tsx
components/
  Nav.tsx
  ProjectCard.tsx
  Reveal.tsx
data/
  projects.ts
```

## Notes
- Project cards link to individual static project routes.
- The current imagery and project descriptions are placeholders for layout demonstration, not claims about completed client work.
- The contact email and social links are placeholders and must be updated before publishing.

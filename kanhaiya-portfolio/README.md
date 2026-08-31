# Kanhaiya Kumar — Portfolio

A single-page developer portfolio built with React, Vite, and Tailwind CSS,
generated from Kanhaiya Kumar's CV. All content lives in one file
(`src/data/portfolio.js`) so it's easy to update without touching any
component code.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy on Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repository.
3. Vercel auto-detects Vite — framework preset "Vite", build command
   `npm run build`, output directory `dist`. Leave these as-is and click
   Deploy.

(Alternatively, install the Vercel CLI and run `vercel` from this folder.)

## Where to put your resume PDF

The "View Resume" button links to `/Kanhaiya-Kumar-Resume.pdf`. Place your
actual resume file at:

```
public/Kanhaiya-Kumar-Resume.pdf
```

Vite serves everything in `public/` from the site root, so the button will
work as soon as the file is there — no code changes needed.

## Where to replace the placeholder GitHub/demo links

Project links are placeholders (`#`) because no real repository/demo URLs
were provided. Open `src/data/portfolio.js` and edit the `projects` array —
each project object has a `github` and `demo` field:

```js
{
  name: 'JAN-DRISHTI',
  ...
  github: '#',   // replace with your real repo URL
  demo: '#',     // replace with a live demo URL, or delete the field
                 // and remove the "Live demo" link in Projects.jsx if
                 // there isn't one
}
```

## Editing content

Everything text-based — name, contact info, skills, projects, training,
certifications, achievements, education — is in `src/data/portfolio.js`.
Change the values there and every section that uses them updates
automatically.

## Notes on honesty in the content

- The contact form has no backend wired up. Submitting it opens the
  visitor's own email client with the message pre-filled — it does not
  silently "send" anything. Connect a service like Formspree, EmailJS, or
  your own API route if you want in-page submission.
- Only skills, projects, training, certifications, and achievements listed
  in the original CV are included. No technologies, statistics, or
  experience were invented.
- This is a single-page site with anchor navigation, so no router/404 page
  was added. If you later add routed pages, add a NotFound route.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Skills, Projects, ...)
  data/         portfolio.js — single source of truth for all content
  hooks/        useTheme, useActiveSection, useReveal
  index.css     global styles, theme CSS variables, fonts
  App.jsx       page composition
  main.jsx      React entry point
public/
  favicon.svg
  Kanhaiya-Kumar-Resume.pdf   <- add this file
```

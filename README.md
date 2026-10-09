# Srujan B S — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

**Requirements:** [Node.js](https://nodejs.org) version 18 or later.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This creates an optimized, static version of the site in the `dist/` folder.
Preview it locally with:

```bash
npm run preview
```

## Where to edit things

Almost everything on the site is driven by one file:

**`src/data/portfolio.js`**

Edit this file to update:
- Your name, title, tagline, college, and location
- Your email and resume link
- GitHub / LinkedIn URLs
- About section text and quick facts
- Skills (grouped by category)
- Projects (name, description, tags, GitHub/demo links, image)
- Education entries
- Experience / internships (add an object to the `experience` array)
- Achievements (add an object to the `achievements` array)
- "Currently learning" list
- Navbar links

You generally will not need to touch any file inside `src/components/` for
routine content updates — the components simply read from this data file.

### Adding or changing your profile photo

1. Replace `public/images/profile.jpg` with your new photo (keep the same
   filename, or update the `photo` path in `src/data/portfolio.js`).
2. A portrait-oriented photo (taller than it is wide) works best with the
   current layout, but any reasonably sized photo will be cropped cleanly.

### Adding project screenshots

1. Add your image to `public/images/` (for example `public/images/studyflow.png`).
2. In `src/data/portfolio.js`, set that project's `image` field to the path,
   e.g. `image: '/images/studyflow.png'`.
3. To have the screenshot show up on the card, add an `<img>` using
   `project.image` inside `src/components/Projects.jsx` (a `image` field is
   already reserved in the data for this).

### Adding a new project

Add a new object to the `projects` array in `src/data/portfolio.js`:

```js
{
  name: 'Project name',
  description: 'One or two sentences about what it does.',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/your-username/repo',
  demo: '', // optional live link
  image: '', // optional screenshot path
}
```

### Showing Experience or Achievements sections

Both sections are hidden automatically when their arrays are empty (so
nothing fake ever appears). As soon as you add an entry to `experience` or
`achievements` in `src/data/portfolio.js`, the matching section appears on
the site automatically.

## Project structure

```
portfolio/
├── public/
│   ├── images/        → profile photo & project screenshots
│   └── favicon/        → site favicon
├── src/
│   ├── components/     → one component per section (Navbar, Hero, About, …)
│   ├── data/
│   │   └── portfolio.js  → all editable content lives here
│   ├── App.jsx          → assembles the page from components
│   ├── main.jsx         → React entry point
│   └── index.css        → global styles & Tailwind setup
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Deploying

This is a static site, so it can be deployed anywhere that serves static
files. Two easy free options:

**Vercel**
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), import the repository.
3. Framework preset: Vite. Leave build settings as default (`npm run build`,
   output directory `dist`). Deploy.

**Netlify**
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com), "Add new site" → import the
   repository.
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

You can also drag-and-drop the `dist/` folder (after running `npm run
build`) directly onto Netlify's dashboard for a quick deploy without git.

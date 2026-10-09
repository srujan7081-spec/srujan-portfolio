# Srujan B S — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

### Requirements

* [Node.js](https://nodejs.org/) version 18 or later
* Git (optional, for version control)

### Run Locally

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Open the terminal and run:

```bash
npm install
npm run dev
```

4. Open the URL shown in your terminal, usually `http://localhost:5173`.

## Building for Production

Create an optimized production build:

```bash
npm run build
```

This creates the production-ready files inside the `dist/` folder.

To preview the production build locally, run:

```bash
npm run preview
```

## Where to Edit Portfolio Content

Most portfolio content is managed in:

`src/data/portfolio.js`

You can update:

* Your name, title, tagline, college, and location
* Email address and resume link
* GitHub and LinkedIn profile URLs
* About section and personal details
* Skills grouped by category
* Projects, descriptions, technologies, GitHub links, demo links, and images
* Education details
* Experience and internship details
* Achievements
* Currently learning section
* Navigation links

For regular content updates, you generally do not need to edit the files inside `src/components/`.

## Adding or Changing Your Profile Photo

1. Replace `public/images/profile.jpg` with your new photo.
2. Keep the same filename, or update the `photo` path in `src/data/portfolio.js`.
3. A portrait-oriented photo works well with the current layout.

## Adding Project Screenshots

1. Add your screenshot to `public/images/`, for example `public/images/studyflow.png`.
2. Open `src/data/portfolio.js`.
3. Set the relevant project's `image` field to the image path:

```js
image: '/images/studyflow.png'
```

4. Ensure the project component displays the image using `project.image`.

## Adding a New Project

Add a new object to the `projects` array in `src/data/portfolio.js`:

```js
{
  name: 'Project Name',
  description: 'A brief description of the project.',
  tags: ['React', 'Java'],
  github: 'https://github.com/your-username/repository',
  demo: '',
  image: ''
}
```

Replace the example information with your actual project details.

## Experience and Achievements

The Experience and Achievements sections are designed to remain hidden when their corresponding arrays are empty.

To display these sections, add your actual experience or achievement entries to the relevant arrays in `src/data/portfolio.js`.

## Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg
│   ├── favicon/
│   └── Srujan B S - Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Learning.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Technologies Used

* React
* Vite
* JavaScript
* Tailwind CSS
* Framer Motion
* HTML and CSS
* Git and GitHub

## Deployment

This is a frontend portfolio that can be deployed using a static hosting platform.

### Option 1: Vercel

1. Push the project to your GitHub repository.
2. Visit [Vercel](https://vercel.com/).
3. Import your GitHub repository.
4. Select Vite as the framework if it is not detected automatically.
5. Use the following settings:

   * Build command: `npm run build`
   * Output directory: `dist`
6. Click Deploy.

### Option 2: Netlify

1. Push the project to GitHub.
2. Visit [Netlify](https://www.netlify.com/).
3. Import your GitHub repository.
4. Configure the build settings:

   * Build command: `npm run build`
   * Publish directory: `dist`
5. Deploy the website.

## Author

**Srujan B S**

Engineering Student | Aspiring Software Developer

GitHub: [srujan7081-spec](https://github.com/srujan7081-spec)

---

Thank you for visiting my portfolio!

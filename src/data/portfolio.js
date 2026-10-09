// ---------------------------------------------------------------------------
// This file is the single source of truth for everything on the site.
// Edit the values below to update your portfolio — you should not need to
// touch any component file for routine content changes.
// ---------------------------------------------------------------------------

export const personal = {
  name: 'Srujan B S',
  title: 'Computer Science Engineering Student',
  tagline:
    "3rd-year CSE student building full-stack, blockchain, and AI/ML projects — currently focused on turning what I learn in the classroom into things that actually run.",
  college: "RTE Society's Rural Engineering College",
  location: 'Hulkoti, Karnataka, India',
  year: '3rd Year, B.E. Computer Science & Engineering',
  photo: '/images/profile.jpg',
  email: '', // add your email here to enable the contact button
  resumeUrl: '/Srujan%20B%20S%20-%20Resume.pdf',
  social: {
    github: 'https://github.com/srujan7081-spec',
    linkedin:
      'https://www.linkedin.com/in/srujan-saranadagoudar-a7740a3a1',
  },
}

export const about = {
  paragraphs: [
    "I'm a 3rd-year Computer Science Engineering student at RTE Society's Rural Engineering College in Hulkoti, Karnataka. Most of my time goes into learning by building — taking a concept from class and turning it into a working project rather than leaving it on paper.",
    "My interests sit across full-stack web development, blockchain, and AI/ML, including reinforcement learning. I like understanding systems end to end: how a frontend, a backend, and the logic underneath it all fit together.",
    "I'm still early in this journey, and I'm using these years to build a solid foundation before I step into the industry.",
  ],
  quickFacts: [
    { label: 'Degree', value: 'B.E. Computer Science & Engineering' },
    { label: 'Year', value: '3rd Year' },
    { label: 'Grade', value: '8 / 10 CGPA' },
    { label: 'College', value: "RTE Society's Rural Engineering College" },
  ],
}

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C', 'Java (OOPs)'],
  },
  {
    category: 'Computer Science Fundamentals',
    items: ['Data Structures & Algorithms (C)', 'Object-Oriented Programming'],
  },
  {
    category: 'Web Development',
    items: ['Full-Stack Web Development'],
  },
  {
    category: 'Emerging Technologies',
    items: ['Blockchain', 'Artificial Intelligence & Machine Learning', 'Reinforcement Learning'],
  },
]

export const projects = [
  {
    name: 'StudyFlow — Student Productivity Tracker',
    description:
      'A productivity tracker built for students, designed to help organize study time and stay on top of tasks. Built as a hackathon project.',
    tags: ['Hackathon Project'],
    github: 'https://github.com/Shrikar-19/Study-Flow-Student-Productivity-tracker-app',
    demo: '',
    image: '',
  },
  {
    name: 'More projects coming soon',
    description:
      "I'm actively working on new full-stack, blockchain, and AI/ML projects — this space will be updated as they're completed.",
    tags: ['In Progress'],
    github: '',
    demo: '',
    image: '',
    placeholder: true,
  },
]

export const education = [
  {
    degree: 'B.E. in Computer Science & Engineering',
    institution: "RTE Society's Rural Engineering College",
    location: 'Hulkoti, Karnataka',
    period: '3rd Year — Ongoing',
    detail: 'Current CGPA: 8 / 10',
  },
]

export const experience = []

export const achievements = []

export const currentlyLearning = [
  'Deepening full-stack web development practice',
  'Exploring blockchain fundamentals and applications',
  'Building AI/ML projects, including reinforcement learning',
  'Strengthening DSA problem-solving in C',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

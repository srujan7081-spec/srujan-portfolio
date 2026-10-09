import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { personal } from '../data/portfolio'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-content mx-auto px-6 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center"
      >
        {/* Left: text */}
        <div className="order-2 md:order-1">
          <motion.p variants={item} className="font-mono text-sm text-brass mb-5">
            {personal.title}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold tracking-tight text-ink-900"
          >
            {personal.name}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base sm:text-lg text-ink-500 leading-relaxed">
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex items-start gap-2 text-sm text-ink-400">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>
              {personal.college}, {personal.location}
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink-900 text-paper px-5 py-3 text-sm font-medium hover:bg-ink-700 transition-colors duration-200"
            >
              View projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-5 py-3 text-sm font-medium text-ink-900 hover:border-ink-900 transition-colors duration-200"
            >
              Contact me
            </a>
            <a
              href={personal.resumeUrl}
              download="Srujan-B-S-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-5 py-3 text-sm font-medium text-ink-900 hover:border-ink-900 transition-colors duration-200"
            >
              <Download size={16} />
              Download resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-ink-500 hover:text-ink-900 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-500 hover:text-ink-900 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div variants={item} className="order-1 md:order-2 relative mx-auto md:mx-0 w-56 sm:w-72 md:w-full max-w-sm">
          <div
            className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-brass/40 bg-brass/[0.06]"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden border border-ink-200 shadow-[0_18px_40px_-20px_rgba(21,24,28,0.35)] bg-ink-100">
            <img
              src={personal.photo}
              alt={`Portrait of ${personal.name}`}
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

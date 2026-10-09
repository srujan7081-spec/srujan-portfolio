import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-ink-100">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-brass mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            Things I&rsquo;ve built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group rounded-xl p-7 flex flex-col h-full transition-colors duration-200 ${
                project.placeholder
                  ? 'border border-dashed border-ink-200 bg-transparent'
                  : 'border border-ink-100 bg-paper hover:border-brass/60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink-900 leading-snug">
                  {project.name}
                </h3>
                {!project.placeholder && (
                  <div className="flex items-center gap-3 shrink-0 pt-0.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} source code on GitHub`}
                        className="text-ink-400 hover:text-ink-900 transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="text-ink-400 hover:text-ink-900 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                {project.description}
              </p>

              {project.tags?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-ink-400 border border-ink-100 rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

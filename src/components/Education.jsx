import { motion } from 'framer-motion'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-ink-100 bg-paper-dim/50">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-brass mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            Academic background
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative pl-8 pb-2 border-l border-ink-200 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-brass border-2 border-paper" />
              <p className="font-mono text-xs text-ink-400">{edu.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">{edu.degree}</h3>
              <p className="mt-1 text-sm text-ink-500">
                {edu.institution}, {edu.location}
              </p>
              {edu.detail && (
                <p className="mt-2 text-sm text-ink-900 font-medium">{edu.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

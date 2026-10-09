import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  if (!experience?.length) return null

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-ink-100">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-brass mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            Where I&rsquo;ve worked
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-2xl">
          {experience.map((role) => (
            <div key={role.role} className="border border-ink-100 rounded-xl p-6">
              <p className="font-mono text-xs text-ink-400">{role.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">{role.role}</h3>
              <p className="mt-1 text-sm text-ink-500">{role.org}</p>
              {role.detail && <p className="mt-3 text-sm text-ink-500 leading-relaxed">{role.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

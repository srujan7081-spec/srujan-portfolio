import { motion } from 'framer-motion'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-ink-100">
      <div className="max-w-content mx-auto px-6 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-brass mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            Learning by building
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base sm:text-lg text-ink-500 leading-relaxed max-w-2xl">
              {p}
            </p>
          ))}

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 max-w-lg pt-6 border-t border-ink-100">
            {about.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs text-ink-400">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink-900 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}

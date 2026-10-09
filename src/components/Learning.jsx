import { motion } from 'framer-motion'
import { currentlyLearning } from '../data/portfolio'

export default function Learning() {
  if (!currentlyLearning?.length) return null

  return (
    <section className="py-20 md:py-28 border-t border-ink-100">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-brass mb-3">Currently</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            What I&rsquo;m focused on right now
          </h2>
        </motion.div>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {currentlyLearning.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-sm sm:text-base text-ink-500"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

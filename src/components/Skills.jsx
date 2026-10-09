import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-ink-100 bg-paper-dim/50">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-brass mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            What I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-ink-100 border border-ink-100 rounded-xl overflow-hidden">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-paper p-7"
            >
              <h3 className="text-sm font-mono text-ink-400 mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-ink-900 bg-ink-50 border border-ink-100 rounded-md px-3 py-1.5"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

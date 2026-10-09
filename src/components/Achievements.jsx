import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  if (!achievements?.length) return null

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-ink-100 bg-paper-dim/50">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-brass mb-3">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            Recognition
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a) => (
            <div key={a.title} className="flex gap-4 border border-ink-100 rounded-xl p-6 bg-paper">
              <Award size={20} className="text-brass shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-ink-900">{a.title}</h3>
                {a.detail && <p className="mt-1 text-sm text-ink-500">{a.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

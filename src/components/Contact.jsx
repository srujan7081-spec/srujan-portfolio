import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'

const links = [
  personal.email && {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: personal.social.github.replace('https://', ''),
    href: personal.social.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'View profile',
    href: personal.social.linkedin,
    icon: Linkedin,
  },
].filter(Boolean)

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-ink-100 bg-paper-dim/50">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-lg"
        >
          <p className="font-mono text-sm text-brass mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            Let&rsquo;s talk
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Open to internships, collaborations, and conversations about full-stack, blockchain, or AI/ML work. Reach me through any of the links below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl">
          {links.map(({ label, value, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col gap-4 rounded-xl border border-ink-100 bg-paper p-6 hover:border-brass/60 transition-colors duration-200"
            >
              <Icon size={20} className="text-brass" />
              <div>
                <p className="text-sm font-medium text-ink-900">{label}</p>
                <p className="mt-1 text-sm text-ink-400 break-words">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

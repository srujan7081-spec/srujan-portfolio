import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100">
      <div className="max-w-content mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-ink-400">
          &copy; {year} {personal.name}
        </p>
        <p className="font-mono text-xs text-ink-300">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

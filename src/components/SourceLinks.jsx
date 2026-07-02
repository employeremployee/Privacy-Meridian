import { useTranslation } from 'react-i18next'

function SourceLinks({ links }) {
  const { t } = useTranslation()

  if (!links || links.length === 0) return null

  return (
    <div className="mt-4">
      <h3 className="text-xs font-medium uppercase tracking-wide text-ink">
        {t('contentBlock.sourceLinksLabel')}
      </h3>
      <ul className="mt-1 space-y-1">
        {links.map((link) => (
          <li key={link.url + link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-meridian-blue underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SourceLinks

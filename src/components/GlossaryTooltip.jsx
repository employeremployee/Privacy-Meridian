import { useTranslation } from 'react-i18next'

function GlossaryTooltip({ term, onLearnMore }) {
  const { t } = useTranslation()

  return (
    <div className="flex max-w-[280px] flex-col gap-2">
      <p className="text-xs font-bold text-ink">{term.term}</p>
      <p className="text-xs text-ink">{term.definition}</p>
      {term.source && (
        <a
          href={term.source.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLearnMore}
          className="text-xs font-medium text-meridian-blue underline hover:no-underline"
        >
          {t('glossary.learnMore')}
        </a>
      )}
    </div>
  )
}

export default GlossaryTooltip

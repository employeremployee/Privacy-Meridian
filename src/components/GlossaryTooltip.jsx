import { useTranslation } from 'react-i18next'

function GlossaryTooltip({ term, onLearnMore }) {
  const { t, i18n } = useTranslation()

  // Show the definition in the active language, falling back to English. The
  // term heading stays English on purpose: it matches the English word the
  // reader hovered in the (English) article prose.
  const definition = term.definitions?.[i18n.language] || term.definition

  return (
    <div className="flex max-w-[280px] flex-col gap-2">
      <p className="text-xs font-bold text-ink">{term.term}</p>
      <p className="text-xs text-ink">{definition}</p>
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

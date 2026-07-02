import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const linkClassName = ({ isActive }) =>
  [
    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
    isActive ? 'bg-meridian-blue text-white' : 'text-ink hover:bg-surface',
  ].join(' ')

function EntrySelector() {
  const { t } = useTranslation()

  return (
    <nav aria-label={t('entrySelector.label')} className="border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-2 px-4 py-3">
        <NavLink to="/regulation" className={linkClassName}>
          {t('entrySelector.byRegulation')}
        </NavLink>
        <NavLink to="/topic" className={linkClassName}>
          {t('entrySelector.byTopic')}
        </NavLink>
        <NavLink to="/map" className={linkClassName}>
          {t('entrySelector.byMap')}
        </NavLink>
      </div>
    </nav>
  )
}

export default EntrySelector

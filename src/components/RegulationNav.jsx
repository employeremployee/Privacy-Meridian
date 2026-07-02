import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import JurisdictionBadge from './JurisdictionBadge.jsx'

const JURISDICTIONS = [gdprData, ccpaData, lgpdData, piplData]

function RegulationNav() {
  const { t } = useTranslation()

  return (
    <nav aria-label={t('regulationNav.label')}>
      <h2 className="mb-4 text-xl font-bold text-ink">{t('regulationNav.heading')}</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {JURISDICTIONS.map(({ jurisdiction }) => (
          <li key={jurisdiction.id}>
            <Link
              to={`/regulation/${jurisdiction.id}`}
              className="flex items-center gap-3 rounded-lg border-l-4 border-meridian-blue bg-surface p-4 hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
            >
              <JurisdictionBadge badge={jurisdiction.badge} />
              <span className="font-medium text-ink">{jurisdiction.fullName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default RegulationNav

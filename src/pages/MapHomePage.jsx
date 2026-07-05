import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import ukgdprData from '../data/jurisdictions/ukgdpr.json'
import fadpData from '../data/jurisdictions/fadp.json'
import pdpaArData from '../data/jurisdictions/pdpa-ar.json'
import lpdpUyData from '../data/jurisdictions/lpdp-uy.json'
import pipaKrData from '../data/jurisdictions/pipa-kr.json'
import appiData from '../data/jurisdictions/appi.json'
import nzpaData from '../data/jurisdictions/nzpa.json'
import popiaData from '../data/jurisdictions/popia.json'
import kdpaData from '../data/jurisdictions/kdpa.json'
import dpdpData from '../data/jurisdictions/dpdp.json'
import glossaryData from '../data/glossary.json'
import { COMPARISON_TOPICS } from '../data/comparison/comparisonTopics.js'
import MapExplorer from '../components/MapExplorer.jsx'
import MapLegend from '../components/MapLegend.jsx'
import DrilldownReadout from '../components/DrilldownReadout.jsx'
import ComparisonMatrix from '../components/ComparisonMatrix.jsx'

const JURISDICTIONS_DATA = {
  gdpr: gdprData,
  ccpa: ccpaData,
  lgpd: lgpdData,
  pipl: piplData,
  ukgdpr: ukgdprData,
  fadp: fadpData,
  'pdpa-ar': pdpaArData,
  'lpdp-uy': lpdpUyData,
  'pipa-kr': pipaKrData,
  appi: appiData,
  nzpa: nzpaData,
  popia: popiaData,
  kdpa: kdpaData,
  dpdp: dpdpData,
}

const VIEWS = ['explore', 'compare']

function MapHomePage() {
  const { t } = useTranslation()
  const [view, setView] = useState('explore')
  const [exploreSelection, setExploreSelection] = useState(null)
  const [compareSelection, setCompareSelection] = useState([])
  const [compareTopicId, setCompareTopicId] = useState(COMPARISON_TOPICS[0].topicId)

  const activeTopic =
    COMPARISON_TOPICS.find((topic) => topic.topicId === compareTopicId) || COMPARISON_TOPICS[0]

  function handleSelect(jurisdictionId) {
    if (view === 'explore') {
      setExploreSelection(jurisdictionId)
    } else {
      setCompareSelection((prev) =>
        prev.includes(jurisdictionId)
          ? prev.filter((id) => id !== jurisdictionId)
          : [...prev, jurisdictionId],
      )
    }
  }

  const selectedIds = view === 'explore' ? (exploreSelection ? [exploreSelection] : []) : compareSelection

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-6">
      {/* View toggle (provisional switch between the two views) */}
      <div role="tablist" aria-label={t('home.viewLabel')} className="mb-4 inline-flex rounded-lg border border-rule p-1">
        {VIEWS.map((v) => {
          const isActive = v === view
          return (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setView(v)}
              className={[
                'rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
                isActive ? 'bg-meridian-blue text-white' : 'text-ink hover:bg-surface',
              ].join(' ')}
            >
              {t(v === 'explore' ? 'home.exploreTab' : 'home.compareTab')}
            </button>
          )
        })}
      </div>

      <p className="mb-3 text-sm text-ink">
        {t(view === 'explore' ? 'home.exploreHint' : 'home.compareHint')}
      </p>

      <MapExplorer
        jurisdictionsData={JURISDICTIONS_DATA}
        mode={view === 'compare' ? 'multi' : 'single'}
        selectedIds={selectedIds}
        onSelectJurisdiction={handleSelect}
      />

      <div className="mt-3 flex flex-col gap-2">
        <MapLegend />
        <p className="text-xs italic text-ink">{t('home.statusIllustrative')}</p>
      </div>

      <div className="mt-8">
        {view === 'explore' ? (
          exploreSelection ? (
            <DrilldownReadout
              jurisdictionData={JURISDICTIONS_DATA[exploreSelection]}
              glossaryData={glossaryData}
            />
          ) : (
            <p className="rounded-lg border border-dashed border-rule bg-surface p-6 text-center text-sm text-ink">
              {t('home.exploreHint')}
            </p>
          )
        ) : (
          <div>
            <nav aria-label={t('topicPicker.label')} className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {COMPARISON_TOPICS.map((topic) => {
                const isActive = topic.topicId === compareTopicId
                return (
                  <button
                    key={topic.topicId}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setCompareTopicId(topic.topicId)}
                    className={[
                      'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
                      isActive ? 'bg-meridian-blue text-white' : 'bg-surface text-ink hover:bg-rule',
                    ].join(' ')}
                  >
                    {topic.topicLabel}
                  </button>
                )
              })}
            </nav>
            <h2 className="mb-4 text-xl font-bold text-ink">{activeTopic.topicLabel}</h2>
            <ComparisonMatrix
              data={activeTopic}
              selectedIds={compareSelection}
              jurisdictionsData={JURISDICTIONS_DATA}
            />
          </div>
        )}
      </div>
    </main>
  )
}

export default MapHomePage

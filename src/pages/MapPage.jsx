import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import WorldMap from '../components/WorldMap.jsx'

const JURISDICTIONS_DATA = {
  gdpr: gdprData,
  ccpa: ccpaData,
  lgpd: lgpdData,
  pipl: piplData,
}

function MapPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-8">
      <WorldMap jurisdictionsData={JURISDICTIONS_DATA} />
    </main>
  )
}

export default MapPage

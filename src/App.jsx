import { Routes, Route, Navigate } from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MapHomePage from './pages/MapHomePage.jsx'
import BarrelmanPage from './pages/BarrelmanPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MapHomePage />} />
            <Route path="/barrelman" element={<BarrelmanPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Retired v1 pages. Old links land on the map, which covers all laws. */}
            <Route path="/map" element={<Navigate to="/" replace />} />
            <Route path="/topic/*" element={<Navigate to="/" replace />} />
            <Route path="/regulation/*" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Tooltip.Provider>
  )
}

export default App

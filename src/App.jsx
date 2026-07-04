import { Routes, Route } from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ModeProvider } from './context/ModeContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MapHomePage from './pages/MapHomePage.jsx'
import RegulationPage from './pages/RegulationPage.jsx'
import TopicPage from './pages/TopicPage.jsx'
import MapPage from './pages/MapPage.jsx'

function App() {
  return (
    <ModeProvider>
      <Tooltip.Provider delayDuration={200}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<MapHomePage />} />
              {/* Legacy routes kept reachable by URL during the v2 transition. */}
              <Route path="/regulation/:jurisdictionId?/:categoryId?" element={<RegulationPage />} />
              <Route path="/topic/:categoryId?/:jurisdictionId?" element={<TopicPage />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Tooltip.Provider>
    </ModeProvider>
  )
}

export default App

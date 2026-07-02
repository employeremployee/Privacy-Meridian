import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import EntrySelector from './components/EntrySelector.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import RegulationPage from './pages/RegulationPage.jsx'
import TopicPage from './pages/TopicPage.jsx'
import MapPage from './pages/MapPage.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <EntrySelector />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regulation/:jurisdictionId?/:categoryId?" element={<RegulationPage />} />
          <Route path="/topic/:categoryId?/:jurisdictionId?" element={<TopicPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

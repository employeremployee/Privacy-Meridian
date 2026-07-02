import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import RegulationPage from './pages/RegulationPage.jsx'
import TopicPage from './pages/TopicPage.jsx'
import MapPage from './pages/MapPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/regulation/:jurisdictionId/:categoryId?" element={<RegulationPage />} />
      <Route path="/topic/:categoryId/:jurisdictionId?" element={<TopicPage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  )
}

export default App

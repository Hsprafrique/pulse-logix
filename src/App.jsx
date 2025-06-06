import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MerchantDashboard from './pages/MerchantDashboard'
import RiderDashboard from './pages/RiderDashboard'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchant" element={<MerchantDashboard />} />
        <Route path="/rider" element={<RiderDashboard />} />
      </Routes>
    </Router>
  )
}

export default App


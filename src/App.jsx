import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import TermsPrivacyPage from './pages/TermsPrivacyPage'


function App() {

  const api = import.meta.env.VITE_APP_API_URL

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/terms-privacy" element={<TermsPrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App

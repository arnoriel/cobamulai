import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Deshboard from './pages/Deshboard.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Halaman Utama / Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Halaman Admin Dashboard untuk CRUD Referral */}
        <Route path="/deshboard" element={<Deshboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
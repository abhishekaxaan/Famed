import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
// import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
      return (
            <div>
                  {/* <Nav /> */}
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                              />
                              <Route
                                    path="/onboarding"
                                    element={<Onboarding />}
                              />
                        </Routes>
                  </BrowserRouter>
            </div>
      )
}

export default App

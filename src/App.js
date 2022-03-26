import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/nprogress.css'
import Car from './components/Cars/Car'
import Cars from './components/Cars/Cars'
import Filter from './components/Filter/Filter'
import Navigation from './components/Navigation'
import NProgress from 'nprogress'
import { useEffect } from 'react'

const App = () => {
  const location = useLocation()
  
  useEffect(() => {
    NProgress.done()
  },[])
  return (
    <div className="App">
      <Navigation/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Cars/>}/>
          <Route path="/car/:id" element={<Car/>}/>
          <Route path='/filter' element={<Filter/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
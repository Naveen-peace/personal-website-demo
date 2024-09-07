import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/style.css'
import RoutePath from './routerpath/RoutePath'

function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutePath />
      </BrowserRouter>
    </div>
  )
}

export default App
import React,{ useEffect } from 'react'
import { BrowserRouter} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './App.css'
import Routing from './Routing'

const getSidebar = am => {
  let base =  'dark:bg-secondary-dark-bg '
  const cls = base + am
    ? 'w-72 fixed sidebar bg-white'
    : 'w-0'
    return <div className={base += cls}>{am ? 'Sidebar' : 'Sidebar w-0 '}</div>
}

const getNavbarClass = am => {
  const base = 'dark:bg-main-bg bg-main-bg min-h-screen w-full '
  return `${base}${ am ? 'md:ml-72': 'flex-2'}`           
}

const App = () => {
  const menuIsActive = true;
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent content="Settings"  position="Top">
                <button 
                  type="button"
                  style={{ background: 'blue', borderRadius: '50%' }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
                  <FiSettings/>    
                </button>       
              </TooltipComponent>
              </div>
            {getSidebar(menuIsActive)}
            <div className={getNavbarClass(menuIsActive)}>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                Navbar
              </div>
            </div>
            <Routing />
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App
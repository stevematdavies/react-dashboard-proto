import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {links} from '../data/dummy'


const _renderLinks = ia => {

  const __getActiveLinkClass = ia => {
    let base = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg ';
    return  ia
    ?  base += 'text-white text-md m-2'
    :  base += 'text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  }

  const __renderChildLinks = (clinks) => 
    clinks.map(clink => (
      <NavLink
        to={`/${clink.name}`}
        key={clink.name}
        onClick={()=>{}  }
        className={__getActiveLinkClass(clink.isActive)}>
          {clink.icon}
          <span className="capitalize">{clink.name}</span>
      </NavLink>
  ));
  
  return <div className='mt-10'>
    {
      links.map(plink => (
        <div key={plink.title}>
          <p className="text-gray-400 m3 mt-4 uppercase">
            {plink.title}
          </p>
          { __renderChildLinks(plink.links) }
        </div>
      ))
    }
  </div>
}

const Sidebar = () => {
  const isMenuActive = true;
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      { 
        isMenuActive &&  (<>
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={() => {}}
            className="items-center gap-3 ml-3 mt-4 flex text-xl fonrt-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /><span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button 
              type="button"
              onClick={()=> {}}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        { _renderLinks(isMenuActive)}
      </>) 
    }
    </div>
  )
}

export default Sidebar
import { useState } from 'react'
import Search from './Search/Search'
import User from './User/User'
import {Routes} from './Config/Routes'


const SideMenu = () => {
  
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1>Quotation Generator</h1>
        </div>
        <div className="flex gap-[20px]">
          {
            Routes.map((item, index) => (
              <div 
                key={`routes_${index}`}
              >
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className="flex gap-[20px] items-center">
          <Search/>
          <User/>
        </div>
      </div>
    </>
  )
}

export default SideMenu;
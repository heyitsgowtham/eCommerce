import Shoppingheader from './header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function shopingViewLayout() {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        {/* {Common header component} */}
        <Shoppingheader/>
        <main className='flex flex-col with-full'>
            <Outlet/>
        </main>
    </div>
  )
}
export default shopingViewLayout
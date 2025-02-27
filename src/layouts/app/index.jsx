import React from 'react'
import HeaderApp from './HeaderApp'
import { Outlet } from 'react-router'
import FooterApp from './FooterApp'

const LayoutApp = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <HeaderApp />
        <main className="flex-1">
            <div className="container mx-auto"><Outlet /></div>
        </main>
        <FooterApp />
    </div>
  )
}

export default LayoutApp
import React from 'react'
import { Outlet } from 'react-router'

const AuthAppLayout = () => {
  return (
    <div className="flex min-h-screen">
        <div className='w-1/2 bg-amber-200'>
            <img
                src="/assets/imgs/others/AuthBanner.png"
                alt=""
                width="100"
                height="100"
                className="w-full h-full aspect-video"
            />
        </div>
        <div className="flex-1">
            <Outlet />
        </div>
    </div>
  )
}

export default AuthAppLayout
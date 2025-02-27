import {lazy} from 'react'
import LayoutApp from '@/layouts/app'
import {createBrowserRouter} from 'react-router'

const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutApp,
        children: [
            {
                path: "",
                Component: lazy(() => import('@/pages/app/LandingPage'))
            }
        ]
    }
])

export default router
import {lazy} from 'react'
import LayoutApp from '@/layouts/app'
import {createBrowserRouter} from 'react-router'
import AuthAppLayout from '@/layouts/auth/app'

const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutApp,
        children: [
            {
                path: "",
                Component: lazy(() => import('@/pages/app/LandingPage'))
            },
            {
                path: "job",
                Component: lazy(() => import('@/pages/app/JobPage'))
            },
            {
                path: "job/:id",
                Component: lazy(() => import('@/pages/app/JobDetailPage'))
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthAppLayout,
        children: [
            {
                path: 'register',
                Component: lazy(() => import('@/pages/auth/Register'))
            },
            {
                path: 'login',
                Component: lazy(() => import('@/pages/auth/Login'))
            }
        ]
    }
])

export default router
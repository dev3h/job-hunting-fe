import {lazy} from 'react'
import LayoutApp from '@/layouts/app'
import {createBrowserRouter} from 'react-router'
import AuthAppLayout from '@/layouts/auth/app'
import DashboardLayout from '@/layouts/dashboard'

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
    },
    {
        path: "/job-seeker",
        Component: DashboardLayout,
        children: [
            {
                path: 'dashboard',
                Component: lazy(() => import('@/pages/app/Dashboard/Home'))
            },
            {
                path: 'message',
                Component: lazy(() => import('@/pages/app/Dashboard/Home'))
            }
        ]
    },
    {
        path: "/employee",
        Component: DashboardLayout,
        children: [
            {
                path: 'dashboard',
                Component: lazy(() => import('@/pages/app/Dashboard/Home'))
            },
            {
                path: 'message',
                Component: lazy(() => import('@/pages/app/Dashboard/Home'))
            },
            {
                path: 'job',
                Component: lazy(() => import('@/pages/employee/Job'))
            },
            {
                path: 'job/create',
                Component: lazy(() => import('@/pages/employee/Job/CreateEditForm'))
            }
        ]
    },
    {
        path: "/admin",
        Component: DashboardLayout,
        children: [
            {
                path: 'dashboard',
                Component: lazy(() => import('@/pages/app/Dashboard/Home'))
            },
            {
                path: 'message',
                Component: lazy(() => import('@/pages/app/Dashboard/Home'))
            }
        ]
    }
])

export default router
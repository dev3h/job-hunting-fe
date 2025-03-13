import ROUTES from "./routes"

const USER_MENU = [
    {
        group: null,
        children: [
            {
                title: "Dashboard",
                url: "/job-seeker/dashboard",
                icon: 'home.svg',
                pathActive: 'dashboard'
            },
            {
                title: "Messages",
                url: "/job-seeker/message",
                icon: 'message.svg',
                pathActive: 'message'
            },
            {
                title: "My Applications",
                url: "#",
                icon: 'application.svg',
                pathActive: 'application'
            },
            {
                title: "Find Jobs",
                url: "#",
                icon: 'findjob.svg',
                pathActive: 'job'
            },
            {
                title: "Browse Companies",
                url: "#",
                icon: 'company.svg',
                pathActive: 'company'
            },
            {
                title: "My Public Profile",
                url: "#",
                icon: 'profile.svg',
                pathActive: 'profile'
            },
        ]
    },
    {
        group: "Settings",
        children: [
            {
                title: "Settings",
                url: "#",
                icon: 'setting.svg',
                pathActive: 'setting'
            },
            {
                title: "Help Center",
                url: "#",
                icon: 'help.svg',
                pathActive: 'help'
            },
        ]
    }
]

const EMPLOYEE_MENU = [
    {
        group: null,
        children: [
            {
                title: "Dashboard",
                url: "/employee/dashboard",
                icon: 'home.svg',
                pathActive: 'dashboard'
            },
            {
                title: "Messages",
                url: "/employee/message",
                icon: 'message.svg',
                pathActive: 'message'
            },
            {
                title: "Company Profile",
                url: "#",
                icon: 'application.svg',
                pathActive: 'company-profile'
            },
            {
                title: "All Applications",
                url: "#",
                icon: 'findjob.svg',
                pathActive: 'application'
            },
            {
                title: "Job Listing",
                url: ROUTES.EMPLOYEE.JOB.LIST,
                icon: 'company.svg',
                pathActive: 'job'
            },
            {
                title: "My Schedule",
                url: "#",
                icon: 'profile.svg',
                pathActive: 'profile'
            },
        ]
    },
    {
        group: "Settings",
        children: [
            {
                title: "Settings",
                url: "#",
                icon: 'setting.svg',
                pathActive: 'setting'
            },
            {
                title: "Help Center",
                url: "#",
                icon: 'help.svg',
                pathActive: 'help'
            },
        ]
    }
]

const ADMIN_MENU = [
    {
        group: null,
        children: [
            {
                title: "Dashboard",
                url: "/admin/dashboard",
                icon: 'home.svg',
                pathActive: 'dashboard'
            },
            {
                title: "Messages",
                url: "/admin/message",
                icon: 'message.svg',
                pathActive: 'message'
            },
            {
                title: "Company",
                url: "#",
                icon: 'application.svg',
                pathActive: 'application'
            },
        ]
    }
]

export { USER_MENU, EMPLOYEE_MENU, ADMIN_MENU }
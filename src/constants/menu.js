const USER_MENU = [
    {
        group: null,
        children: [
            {
                title: "Dashboard",
                url: "/dashboard",
                icon: 'home.svg',
                pathActive: 'dashboard'
            },
            {
                title: "Messages",
                url: "/dashboard/message",
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

export { USER_MENU }
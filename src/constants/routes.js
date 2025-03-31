const ROUTES = {
    AUTH: {
        APP: {
            'LOGIN': '/auth/login',
            'REGISTER': '/auth/register'
        }
    },
    LANDING: {
        'JOB': '/job',
    },
    JOB_SEEKER: {
        'DASHBOARD': '/job-seeker/dashboard',
        'MESSAGE': '/job-seeker/message'
    },
    EMPLOYEE: {
        'DASHBOARD': '/employee/dashboard',
        'MESSAGE': '/employee/message',
        'JOB': {
            'LIST': '/employee/job',
            'CREATE': '/employee/job/create'
        }
    }
}
export default ROUTES
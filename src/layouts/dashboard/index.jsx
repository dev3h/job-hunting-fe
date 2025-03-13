import { AppSidebar } from '@/components/app-sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router'
import { useEmployeeStore, useJobSeekerStore } from '@/config/store'
import ROUTES from '@/constants/routes'
import { Button } from '@/components/ui/button'

const DashboardLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [userAccount, setUserAccount] = useState(null)
  const jobSeekerStore = useJobSeekerStore();
  const employeeStore = useEmployeeStore();
  const getUserInfo = async () => {
      const store = location.pathname.startsWith('/employee') ? employeeStore : jobSeekerStore;
      const user = await store.getUser();
      setUserAccount(user);
      if(!user) {
        navigate(ROUTES.AUTH.APP.LOGIN);
      }
  }

  useEffect(() => {
    getUserInfo();
  }, [])
  return (
    <SidebarProvider>
      <AppSidebar user={userAccount} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full justify-between">
            <div className='flex items-center gap-2'>
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                {location.pathname.startsWith('/employee') && (
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                          Building Your Application
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                )}
              </div>
              {location.pathname.startsWith('/employee') && (
                <Button size='lg'>
                  <Link to={ROUTES.EMPLOYEE.JOB.CREATE}>
                    Create a post
                  </Link>
                </Button>
              )}
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
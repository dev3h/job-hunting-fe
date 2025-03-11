import React, {useEffect, useState} from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { ADMIN_MENU, EMPLOYEE_MENU, USER_MENU } from "@/constants/menu"
import { useLocation } from "react-router"

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
}

export function AppSidebar({
  user, ...props
}) {
  const [sidebarData, setSidebarData] = useState([]);
  const sidebarContext = useSidebar();
  let location = useLocation();
  useEffect(() => {
    const pathName = location.pathname.split("/");
    let activeMenu = USER_MENU;
    if (location.pathname.startsWith('/employee')) {
      activeMenu = EMPLOYEE_MENU;
    } else if (location.pathname.startsWith('/admin')) {
      activeMenu = ADMIN_MENU;
    }

    const updatedSidebar = activeMenu?.map((item) => ({
      ...item,
      children: item.children?.map((child) => ({
        ...child,
        isActive: pathName.includes(child.pathActive),
      })),
    }));

    setSidebarData(updatedSidebar);
  }, [location]);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {sidebarContext?.state === 'expanded' ? <img src="/assets/imgs/logos/logo.svg" alt="" width='150' height='50' /> : <img src="/assets/imgs/logos/logo-small.svg" alt="" width='50' height='50' />}
      </SidebarHeader>
      <SidebarContent>
        <NavMain sidebarData={sidebarData} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

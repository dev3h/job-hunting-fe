"use client"

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import styled from "styled-components";

export function NavMain({
  sidebarData
}) {
  return (
    <>
      {sidebarData?.map((data, index) => (
        <SidebarGroup key={index}>
          {data?.group && <SidebarGroupLabel>{data?.group}</SidebarGroupLabel>}
          <SidebarMenu>
            {data?.children?.map((item, itemIndex) => (
              <>
              {item?.items && item.items.length > 0 ? (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <img alt='' src={`/asset/imgs/svg/sidebar/${item?.icon}`} width='16' height='16' />}
                        <span>{item.title}</span>
                        <ChevronRight
                          className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item?.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SideBarMenuItemCustom key={`${item.title}-${itemIndex}`}
                className={item.isActive ? 'active' : ''}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon && <img alt='' src={`/assets/imgs/svg/sidebar/${item?.icon}`} width='16' height='16' />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SideBarMenuItemCustom>
              )}
              </>
            ))}
          </SidebarMenu>
      </SidebarGroup>
      ))}
    </>
  );
}

const SideBarMenuItemCustom = styled(SidebarMenuItem)`
  &.active {
    background-color: var(--grayE9);
    &:hover a {
      background-color: var(--grayE9) !important;
    }
    & img {
      filter: brightness(0) saturate(100%) invert(18%) sepia(82%) saturate(5222%) hue-rotate(244deg) brightness(92%) contrast(87%);
    }
    & a {
      color: var(--primary);
    }
  }
`

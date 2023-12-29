import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { AvatarFallback, AvatarImage } from "../ui/avatar.js"
import { Avatar } from "../ui/avatar.tsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.js"
import { PenSquare, Search, Inbox, CircleDotDashed, Layers3, Map } from "lucide-react"

const firstSection = [
  {
    id: 'inbox',
    label: 'Inbox',
    icon: <Inbox width={14} height={14} /> 
  },
  {
    id: 'my-issues',
    label: 'My Issues',
    icon: <CircleDotDashed width={14} height={14} /> 
  },
  {
    id: 'views',
    label: 'Views',
    icon: <Layers3 width={14} height={14} /> 
  },
  {
    id: 'map',
    label: 'Map',
    icon: <Map width={14} height={14} /> 
  }
]

const Sidebar = () => {
  // const [sidebarState, setSidebarState] = useState(sidebarMenu)

  // const handleToggleSubMenu = (id: number) => {
  //   const newState = sidebarState.map((item) => {
  //     if (item.id == id) {
  //       return {
  //         ...item,
  //         isShowSubMenu: !item.isShowSubMenu,
  //       }
  //     } else item.isShowSubMenu = false
  //     return item
  //   })
  //   setSidebarState(newState)
  // }

  return (
    <div className="w-[219px] gap-3 h-full fixed flex flex-col border-r border-r-[#ffffff1a] p-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-[9px] items-center p-2 hover:bg-[#262736] rounded cursor-default">
            <Avatar className="rounded-3xl">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Admin</AvatarFallback>
            </Avatar>
            <div className="text-[#d2d3d0] font-medium">Admin</div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px] bg-[#20212e] text-[#e0e1ec] border-[#35384a]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#35384a]" />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-[#35384a]" />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#35384a]" />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-[#35384a]" />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-[#35384a]" />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-2">
        <div className="w-[157px] rounded flex items-center border hover:bg-[#2b2c44] bg-[#20212e] border-[#35384a] px-[6px] h-[28px] gap-[9px] text-[12px]">
          <PenSquare width={14} height={14} />
          New issue
        </div>
        <div className="rounded flex items-center border hover:bg-[#2b2c44] bg-[#20212e] border-[#35384a] px-[6px] h-[28px] gap-[9px] text-[12px]">
          <Search width={14} height={14} />
        </div>
      </div>
      <div className="flex flex-col">
        {firstSection.map(section => (
          <div className="cursor-default rounded flex items-center hover:bg-[#2b2c44] px-[6px] h-[28px] gap-[9px] text-[12px] font-medium" key={section.id}>
            {section.icon}
            {section.label}
          </div>
        ))}
        </div>
    </div>
  )
}

export default Sidebar

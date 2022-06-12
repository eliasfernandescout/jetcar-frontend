import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../../pages/home/home'
import { MdHome, MdNotifications, MdEmail, MdSettings, MdLogout, MdOutlineCreate, MdDeleteForever } from 'react-icons/md'

// export const RoutesComponent = () => {
//   return (
//     <main>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/bye' element={<div>Tachau</div>}/>
//       </Routes>
//     </main>

//   )
// }

export enum RoutePath{
  LOG_IN='/login',
  FORGOT_PASSWORD = '/forgot-password',
  HOME='/',
  MESSAGES='/messages',
  INBOX='/inbox',
  NOTIFICATIONS='/notifications',
  SETTINGS='/settings',
  CREATE_MESSAGE='/create-message',
  REMOVED_MESSAGES='/removed-messages',
  LOG_OUT='/logout'
}

export const defaultSidebarNavIems: SidebarNavItem[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    icon: MdHome
  },
  {
    name: 'notifications',
    path: RoutePath.NOTIFICATIONS,
    icon: MdNotifications
  },
  {
    name: 'inbox',
    path: RoutePath.MESSAGES,
    icon: MdEmail
  },
  {
    name: 'settings',
    path: RoutePath.SETTINGS,
    icon: MdSettings
  },
  {
    name: 'logout',
    path: RoutePath.LOG_OUT,
    icon: MdLogout
  }

]

export const messageSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    icon: MdHome
  },
  {
    name: 'Create message',
    path: RoutePath.CREATE_MESSAGE,
    icon: MdOutlineCreate

  },
  {
    name: 'Check message',
    path: RoutePath.MESSAGES,
    icon: MdEmail
  },
  {
    name: 'Removed messages',
    path: RoutePath.REMOVED_MESSAGES,
    icon: MdDeleteForever
  }
]

export interface SidebarNavItem {
  name: string
  path: string
  icon: React.ComponentType
}

export interface Route {
  name: string
  path: RoutePath
  SidebarNavItems?: SidebarNavItem[]
  component: React.ComponentType

}

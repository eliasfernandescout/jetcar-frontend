import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../../pages/Home'
import { MdHome, MdNotifications, MdEmail, MdSettings, MdLogout, MdCarRental, MdCarRepair, MdAddBox } from 'react-icons/md'
import { CarRegistration, Cars, Logout, Notifications, RentedCars } from 'pages'

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
  CARS='/cars',
  INBOX='/inbox',
  NOTIFICATIONS='/notifications',
  SETTINGS='/settings',
  CAR_REGISTRATION='/car-registration',
  RENTED_CARS='/rented-cars',
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
    path: RoutePath.INBOX,
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

export const carSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    icon: MdHome
  },
  {
    name: 'Registro de Carros',
    path: RoutePath.CAR_REGISTRATION,
    icon: MdAddBox

  },
  {
    name: 'Carros',
    path: RoutePath.CARS,
    icon: MdCarRepair
  },
  {
    name: 'Carros Locados',
    path: RoutePath.RENTED_CARS,
    icon: MdCarRental
  }
]

export const routes: Route[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    component: Home,
    SidebarNavItems: defaultSidebarNavIems
  },
  {
    name: 'logout',
    path: RoutePath.LOG_OUT,
    component: Logout
  },
  {
    name: 'notifications',
    path: RoutePath.NOTIFICATIONS,
    component: Notifications,
    SidebarNavItems: defaultSidebarNavIems
  },
  {
    name: 'cars',
    path: RoutePath.CARS,
    component: Cars,
    SidebarNavItems: carSidebarNavItems
  },
  {
    name: 'car-registration',
    path: RoutePath.CAR_REGISTRATION,
    component: CarRegistration,
    SidebarNavItems: carSidebarNavItems
  },
  {
    name: 'rented-cars',
    path: RoutePath.RENTED_CARS,
    component: RentedCars,
    SidebarNavItems: carSidebarNavItems
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

import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../../pages/home/Home'
import { MdHome, MdNotifications, MdEmail, MdSettings, MdLogout, MdCarRental, MdCarRepair, MdAddBox } from 'react-icons/md'
import { CarRegistration, Cars, Logout, RentedCars } from 'pages'

export enum RoutePath{
  LOG_IN='/login',
  // FORGOT_PASSWORD = '/forgot-password',
  HOME='/',
  CARS='/cars',
  // INBOX='/inbox',
  // NOTIFICATIONS='/notifications',
  SETTINGS='/settings',
  CAR_REGISTRATION='/car-registration',
  RENTED_CARS='/rented-cars',
  LOG_OUT='/logout'
}

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
    name: 'Todos os Carros',
    path: RoutePath.CARS,
    icon: MdCarRepair
  },
  {
    name: 'Carros Locados',
    path: RoutePath.RENTED_CARS,
    icon: MdCarRental
  },
  {
    name: 'logout',
    path: RoutePath.LOG_OUT,
    icon: MdLogout
  }
]

export const routes: Route[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    component: Home,
    SidebarNavItems: carSidebarNavItems
  },
  {
    name: 'logout',
    path: RoutePath.LOG_OUT,
    component: Logout
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

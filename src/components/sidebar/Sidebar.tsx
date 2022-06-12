import { routes } from 'components/routes/routes'
import { useMemo } from 'react'
import { matchPath, useLocation } from 'react-router'
import * as S from './Sidebar.styles'

const Sidebar = () => {
  const location = useLocation()
  const currentRoute = useMemo(() => routes.find(route => matchPath(location.pathname, route.path)), [location])

  return (
    <S.Sidebar>Sidebar</S.Sidebar>
  )
}

export default Sidebar

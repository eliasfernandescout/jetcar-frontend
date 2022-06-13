import { routes } from 'components/routes/routes'
import { useMemo } from 'react'
import { IconContext } from 'react-icons'
// import { IconContext } from 'react-icons/lib'
import { matchPath, useLocation } from 'react-router'
import * as S from './Sidebar.styles'

const Sidebar = () => {
  const location = useLocation()
  const currentRoute = useMemo(() => routes.find(route => matchPath(location.pathname, route.path)), [location])

  const longestLabelWidth = useMemo(() => {
    if (currentRoute?.SidebarNavItems === undefined) {
      return 0
    }
    const sidebarItems = [...currentRoute?.SidebarNavItems]
    const longestLabel = sidebarItems.sort((a, b) => b.name.length - a.name.length)[0].name

    const root = document.getElementById('root')
    const label = document.createElement('label')
    label.innerText = longestLabel
    root?.appendChild(label)
    const longestWidth = label.offsetWidth
    root?.removeChild(label)
    return longestWidth
  }, [currentRoute])

  return (
    <S.Sidebar>
      <IconContext.Provider value={{ color: 'white', size: '2em' }} >
        <S.SidebarContent longestLabelWidth={longestLabelWidth}>
          {currentRoute?.SidebarNavItems?.map((item) => (
            <S.SidebarItem key={item.name}>
              <S.SidebarLink to={item.path}>
                <S.IconContainer>
                  <item.icon/>
                </S.IconContainer>
                <S.SidebarLabel>{item.name}</S.SidebarLabel>
              </S.SidebarLink>
            </S.SidebarItem>
          ))}
        </S.SidebarContent>
      </IconContext.Provider>
    </S.Sidebar>

  )
}

export default Sidebar

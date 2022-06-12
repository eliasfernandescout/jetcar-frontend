import styled from 'styled-components'

const BASE_SIDEBAR_WIDTH = 48

export const Sidebar = styled.nav`
    grid-area: sidebar;
    position: sticky;
    height: calc(100vh - 16px);
    min-height: ${768 - 16}px;
    margin-bottom: 8px;
    width: 100px;
`

export const SidebarContent = styled.ul`


`

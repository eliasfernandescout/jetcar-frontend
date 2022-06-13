import { Link } from 'react-router-dom'
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

export const SidebarLabel = styled.label`
    font-family: Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    text-transform: capitalize;
    line-height: 20px;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: clip;
    overflow: hidden;
    display: none;
`

export const SidebarContent = styled.ul<{longestLabelWidth: number}>`
    list-style: none;
    margin: 0;
    padding: 8px;
    display: flex;
    width: ${BASE_SIDEBAR_WIDTH}px;
    /* width: 200px; */
    flex-direction: column;
    align-items: center;
    background-color: #2B2B2B;
    height: 100vh;
    padding-top:32px;
    overflow: hidden;
    transition: width 0.6s ease;

    &:hover{
        width: ${({ longestLabelWidth }) => {
            const computedWidth = BASE_SIDEBAR_WIDTH + longestLabelWidth + 64
            return computedWidth
        }}px; 
        ${SidebarLabel}{
            display: block;
            
        }

    }
`

export const SidebarItem = styled.li`
    width: 100%;
    cursor: pointer;
    height: 60px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease;
    &:hover{
        background-color: rgba(255, 255, 255, 0.05);
    }

`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const IconContainer = styled.div`
    width: 48px;
    min-width: 48px;
    height: 40px;
    display: flex;
    align-items: center;
`

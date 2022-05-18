import { Link } from 'react-router-dom'
import { RoutesComponent } from '../../routes/routes'
import { MenuStyle } from './menu-styles'

export default function Menu () {
  return (
    <MenuStyle>
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/dashboard">dashboard</Link></li>
      </ul>
    </MenuStyle>
  )
}

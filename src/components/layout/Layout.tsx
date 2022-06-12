import * as S from './Layout.styles'
import { Outlet } from 'react-router-dom'
import Sidebar from 'components/sidebar/Sidebar'

const Layout = () => {
  return (
    <S.Layout>
      <Sidebar/>
      <S.Body>
        <Outlet/>
      </S.Body>
    </S.Layout>
  )
}

export default Layout

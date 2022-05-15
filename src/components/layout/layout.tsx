import { RoutesComponent } from '../routes/routes'
import { StyledLayout } from './layout-styles'

export default function Layout () {
  return (
    <StyledLayout>
      <header>
        <h1>Jet Car</h1>
      </header>
      <RoutesComponent/>
      <footer>
        <a href='https://jetcar.com.br'>jetcar.com.br</a>
      </footer>
    </StyledLayout>
  )
}

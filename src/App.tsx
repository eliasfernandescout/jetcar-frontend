
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/layout'
import { GlobalStyle } from './styles/global'

function App () {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Layout/>
    </BrowserRouter>
  )
}

export default App

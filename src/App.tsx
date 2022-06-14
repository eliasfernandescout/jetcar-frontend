
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutePath, routes } from 'components/routes/routes'
import { NoMatch } from 'pages'
import Layout from 'components/layout/Layout'
import { GlobalStyle } from 'styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            {routes.map((route) => (
              <Route
                index={RoutePath.HOME === route.path}
                path={route.path}
                element={<route.component/>}
                key={route.name}
              />
            ))}
          </Route>
          <Route path='*' element={<NoMatch/>}/>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

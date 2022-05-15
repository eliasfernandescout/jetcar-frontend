import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/home'

export const RoutesComponent = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bye' element={<div>Tachau</div>}/>
      </Routes>
    </main>

  )
}

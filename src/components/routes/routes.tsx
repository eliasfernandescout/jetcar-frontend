import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/home'

// export const RoutesComponent = () => {
//   return (
//     <main>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/bye' element={<div>Tachau</div>}/>
//       </Routes>
//     </main>

//   )
// }

export enum RoutePath{
  LOG_IN='/login',
  FORGOT_PASSWORD = '/forgot-password',
  HOME='/',
  MESSAGES='/messages',
  INBOX='/inbox',
  NOTIFICATIONS='/notifications',
  SETTINGS='/settings',
  CREATE_MESSAGE='/create-message',
  REMOVED_MESSAGES='/removed-messages',
  LOG_OUT='/logout'
}

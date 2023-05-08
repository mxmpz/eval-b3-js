import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Chenils from '../pages/Chenils'

function Router () {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Chenils' element={<Chenils />} />
    </Routes>
  )
}

export default Router

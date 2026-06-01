import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout/Layout'
import Index from './components/pages/Index'
import Blog from './components/pages/Blog'
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'
import Info from './components/pages/Info'






function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={ <Index />} />
           <Route path='/blog'  element={ <Blog />} />
           <Route path='/pricing'  element={ <Pricing />} />
           <Route path='/contact'  element={ <Contact />} />
           <Route path='/faq'  element={ <Info />} />
        </Route>
      </Routes>
    </>
  )
}

export default App




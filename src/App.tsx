import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageAbout from './pages/PageAbout'
import PageHome from './pages/PageHome'
import PageLayout from './layouts/PageLayouts'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<PageHome />} />
            <Route path='/sobre' element={<PageAbout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

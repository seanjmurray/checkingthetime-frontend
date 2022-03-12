import { Routes, Route } from 'react-router-dom'
// Components
import NavBar from './views/components/navbar'
import Footer from './views/components/footer'

// Views
import Home from './views/home'
import Profile from './views/profile'
import Upload from './views/upload'

const App = () => {
  return (
    <>
      <NavBar />
    <div  className="min-vh-100">
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path='upload' element={<Upload />} />
      </Routes>
    </div>
      <Footer />
    </>
  )
}

export default App

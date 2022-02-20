import { Routes, Route } from 'react-router-dom'
// Components
import NavBar from './views/components/navbar'
import Footer from './views/components/footer'

// Views
import Home from './views/home'
import Profile from './views/profile'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

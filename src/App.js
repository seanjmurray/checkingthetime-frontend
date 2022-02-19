import { Routes, Route } from 'react-router-dom'
import NavBar from './views/components/navbar'

// Views
import Home from './views/home'
import Feed from './views/feed'
import Profile from './views/profile'
import Footer from './views/components/footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

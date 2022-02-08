import { Routes, Route } from "react-router-dom";
import NavBar from "./views/components/navbar";
import Feed from "./views/feed";

// Views
import Home from './views/home'
import Profile from "./views/profile";


const App = () => {
  return (
    <>
    <NavBar />
   <Routes>
     <Route index element={<Home />} />
     <Route path='feed' element={<Feed />} />  
     <Route path='profile' element={<Profile />} />
   </Routes>
   </>
  );
}

export default App;

import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import Createpost from "./components/Createpost";
function App() {
  return (
    <>
    <BrowserRouter>
   
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Createpost" element={<Createpost />}/>
          <Route path="/Blog" element={<Blog />}/>


      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;

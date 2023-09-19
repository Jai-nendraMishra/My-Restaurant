import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./Pages/Contact";
import Pagenotfound from "./Pages/Pagenotfound";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
function App() {
  return (
    <div>
  <BrowserRouter>
    <Routes>
<Route path= "/" element={<Home/>} />

<Route path= "/about" element={<About/>} />
<Route path= "/contact" element={<Contact/>} />
<Route path= "/menu" element={<Menu/>} />
<Route path= "*" element={<Pagenotfound/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

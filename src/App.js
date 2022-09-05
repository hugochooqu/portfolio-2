import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home Page/home";
import Contact from "./Pages/Contact page/contact";
import About from "./Pages/About Page/about";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

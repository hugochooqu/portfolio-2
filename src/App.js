import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";

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

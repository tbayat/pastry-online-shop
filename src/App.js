import "./App.css";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contact";
import Menu from "./pages/menu";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/Home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

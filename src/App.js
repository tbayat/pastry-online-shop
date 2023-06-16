import "./App.css";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contact";
import Menu from "./pages/menu";
import OrderNow from "./pages/order";

function App() {
  return (
    <div className="page-container">
      <div className="content">
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<OrderNow />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

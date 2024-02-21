import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './MainPages/HeaderAndFooter/Footer';
import Header from './MainPages/HeaderAndFooter/Header';
import Home from './MainPages/HomePage';
import About from './MainPages/AboutPage';
import ContactPage from './MainPages/ContactPage';
import ScrollToTop from './ScrollToTop';
import OurWork from './MainPages/HomePage/OurWork';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/ourwork' element={<OurWork />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

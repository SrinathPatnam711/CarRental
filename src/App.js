import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cars from './Pages/Cars';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>    
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Cars' element={<Cars />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />    
  </BrowserRouter>
  )
}

export default App;


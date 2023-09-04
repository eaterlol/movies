
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './Pages/Home'
import Avis from './Pages/Avis'
import Movies from './Pages/Movies'
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="avis" element={<Avis />} />
    <Route path="movies" element={<Movies/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import KelasPage from './Pages/KelasPage';
import TestimonialPage from './Pages/TestimonialPage';
import Snk from './Pages/Snk';
import PertanyaanPage from './Pages/PertanyaanPage';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <div>

      <NavBar />

      <Routes>
        <Route path='/testing3' Component={HomePage}></Route>
        <Route path='/kelas' Component={KelasPage}></Route>
        <Route path='/testimonial' Component={TestimonialPage}></Route>
        <Route path='/faq' Component={PertanyaanPage}></Route>
        <Route path='/snk' Component={Snk}></Route>
      </Routes>

      <Footer />

    </div>
  )
}

export default App

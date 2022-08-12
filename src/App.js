import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AboutPage } from './pages/AboutPage';
import { AlumniPage } from './pages/AlumniPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/alumni' element={<AlumniPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

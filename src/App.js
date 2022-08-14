import { Routes, Route } from 'react-router-dom';

import './App.css';
import { PageNotFound } from './pages/PageNotFound';
import { AboutPage } from './pages/AboutPage';
import { AlumniPage } from './pages/AlumniPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { JoinPage } from './pages/JoinPage';
import { ParentsPage } from './pages/ParentsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/alumni' element={<AlumniPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/parents' element={<ParentsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

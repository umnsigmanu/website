import { Routes, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path="about" element={<div>HELLO about</div>} /> */}
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom"

import './App.css';
import { Navbar } from './ui/Navbar';
import { RegistrationPage } from './ui/RegistrationPage'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Routes>
          <Route path='/register' element= {<RegistrationPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

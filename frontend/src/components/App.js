import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";

import { UserContextProvider } from "./context/userContext";

import './App.css';
import { Navbar } from './ui/Navbar';
import { RegistrationPage } from './ui/RegistrationPage'
import Cookies from "js-cookie";

function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get('user_email')) {
      setUserLoggedIn(true)
    }
  }, [Cookies.get('user_email')])

  return (
    <div className="App">
      <UserContextProvider isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn}>
        <header>
          <Navbar />
          <Routes>
            <Route path='/register' element= {<RegistrationPage />} />
          </Routes>
        </header>
      </UserContextProvider>
    </div>
  );
}

export default App;

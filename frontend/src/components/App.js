import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";

import { UserContextProvider } from "./context/userContext";

import './App.css';

import { Navbar } from './ui/Navbar';
import { RegistrationPage } from './ui/RegistrationPage'
import { EditAccount } from "./ui/EditAccount";

import Cookies from "js-cookie";

function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (isUserLoggedIn === false) {
  //     Cookies.remove('user')
  //     Cookies.remove('user_email')
  //   }
  // }, [isUserLoggedIn])

  return (
    <div className="App">
      <UserContextProvider isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn}>
        <header>
          <Navbar />
          <Routes>
            <Route path='/register' element= {<RegistrationPage />} />
            <Route path='/edit-account' element={<EditAccount />} />
          </Routes>
        </header>
      </UserContextProvider>
    </div>
  );
}

export default App;

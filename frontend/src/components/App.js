import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";

import { UserContextProvider } from "./context/userContext";

import './App.css';

import { Navbar } from './ui/Navbar';
import { RegistrationPage } from './ui/RegistrationPage'
import { EditAccount } from "./ui/EditAccount";
import { LoginPage } from "./ui/LoginPage";
import { HomePage } from "./ui/HomePage";
import { ProfilesPage } from "./ui/ProfilesPage";

import Cookies from "js-cookie";

function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get('user')) {
      setUserLoggedIn(true)
    }
  }, [Cookies.get('user')])

  return (
    <div className="App">
      <UserContextProvider isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn}>
        <header>
          <Navbar />
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/profiles/' element={ isUserLoggedIn ? <ProfilesPage /> : <LoginPage />} />
            <Route path='/register' element= {<RegistrationPage />} />
            <Route path='/login' element={ isUserLoggedIn ? <HomePage /> : <LoginPage />} />
            <Route path='/edit-account' element={ isUserLoggedIn ? <EditAccount /> : <HomePage />} />
          </Routes>
        </header>
      </UserContextProvider>
    </div>
  );
}

export default App;

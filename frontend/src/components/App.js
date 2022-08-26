import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";

import { UserContextProvider } from "./context/userContext";

import './App.css';

import { Navbar } from './ui/Navbar';
import { RegistrationPage } from './ui/RegistrationPage'
import { EditAccount } from "./ui/EditAccount";
import { LoginPage } from "./ui/LoginPage";
import { HomePage } from "./ui/HomePage";
import { ProfilePage } from "./ui/ProfilePage";

import Cookies from "js-cookie";

function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContextProvider isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn}>
        <header>
          <Navbar />
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/profile' element={ isUserLoggedIn ? <ProfilePage /> : <LoginPage />} />
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

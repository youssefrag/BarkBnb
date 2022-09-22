import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { UserContextProvider } from "./context/userContext";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { EditAccount } from "./pages/EditAccount";
import { HomePage } from "./pages/HomePage";
import { ProfilesPage } from "./pages/ProfilesPage";
import { MyDogs } from "./pages/MyDogs";
import { NewDog } from "./pages/NewDog";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import Cookies from "js-cookie";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { Button } from "@mui/material";
import { LoginRegister } from "./pages/LoginRegister";
import { CreateSitting } from "./pages/CreateSitting";

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get("user")) {
      setUserLoggedIn(true);
    }
  }, [Cookies.get("user")]);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <UserContextProvider
            isUserLoggedIn={isUserLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
          >
            <header>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/profiles/"
                  element={
                    isUserLoggedIn ? <ProfilesPage /> : <LoginRegister />
                  }
                />
                <Route
                  path="/login-register"
                  element={isUserLoggedIn ? <HomePage /> : <LoginRegister />}
                />
                <Route
                  path="/edit-account"
                  element={isUserLoggedIn ? <EditAccount /> : <HomePage />}
                />
                <Route
                  path="/dogs"
                  element={isUserLoggedIn ? <MyDogs /> : <LoginRegister />}
                />
                <Route
                  path="/new-dog"
                  element={isUserLoggedIn ? <NewDog /> : <LoginRegister />}
                />
                <Route
                  path="/create-sitting/:dogName"
                  element={
                    isUserLoggedIn ? <CreateSitting /> : <LoginRegister />
                  }
                />
              </Routes>
            </header>
          </UserContextProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { UserContextProvider } from "./context/userContext";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { RegistrationPage } from "./pages/RegistrationPage";
import { EditAccount } from "./pages/EditAccount";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { ProfilesPage } from "./pages/ProfilesPage";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import Cookies from "js-cookie";

import { Button } from "@mui/material";
import { LoginRegister } from "./pages/LoginRegister";

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get("user")) {
      setUserLoggedIn(true);
    }
  }, [Cookies.get("user")]);

  return (
    <div className="App">
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
                element={isUserLoggedIn ? <ProfilesPage /> : <LoginPage />}
              />
              <Route path="/register" element={<RegistrationPage />} />
              <Route
                path="/login-register"
                element={isUserLoggedIn ? <HomePage /> : <LoginRegister />}
              />
              <Route
                path="/edit-account"
                element={isUserLoggedIn ? <EditAccount /> : <HomePage />}
              />
            </Routes>
          </header>
        </UserContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

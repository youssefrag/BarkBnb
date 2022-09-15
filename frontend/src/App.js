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

import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { theme } from "./theme";

import Cookies from "js-cookie";

import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    pimary: {
      main: "#094211",
    },
  },
});

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
        <Button variant="contained" size="large">
          Hello
        </Button>
        {/* <UserContextProvider
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
                path="/login"
                element={isUserLoggedIn ? <HomePage /> : <LoginPage />}
              />
              <Route
                path="/edit-account"
                element={isUserLoggedIn ? <EditAccount /> : <HomePage />}
              />
            </Routes>
          </header>
        </UserContextProvider> */}
      </ThemeProvider>
    </div>
  );
}

export default App;

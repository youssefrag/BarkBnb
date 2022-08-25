import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { UserContext } from '../context/userContext';
// import Cookies from 'js-cookie';

export const Navbar = () => {

  let navigate = useNavigate();

  const {userContextName, setName, userContextEmail, setUserEmail, isUserLoggedIn, setUserLoggedIn } = useContext(UserContext);

  const handleLogout = () => {
    //   Cookies.remove('user')
    //   Cookies.remove('user_email')
      setName()
      setUserEmail()
      setUserLoggedIn(false)
  }

  if (isUserLoggedIn === true) {
      return(
        <AppBar 
        >
            <Toolbar>
                <Typography variant="h4">
                    Welcome {userContextName}
                </Typography>
                <Button
                    color="secondary"
                    variant='contained' 
                    size='large'
                    onClick={() => navigate('/edit-account')}
                >
                    Edit Account
                </Button>
                <Button
                    color="secondary"
                    variant='contained' 
                    size='large'
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
      )
  } else {
      return (
        <AppBar 
        >
            <Toolbar>
                <Typography variant="h4">
                    BarkBnb
                </Typography>
                <Button
                    color="secondary"
                    variant='contained' 
                    size='large'
                    // onClick={() => navigate("/register")}
                >
                    Login
                </Button>
                <Button
                    color="secondary"
                    variant='contained' 
                    size='large'
                    onClick={() => navigate("/register")}
                >
                    Sign Up
                </Button>
            </Toolbar>
        </AppBar>
      )

  }

}

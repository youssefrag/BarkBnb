import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { UserContext } from '../context/userContext';

export const Navbar = () => {

  let navigate = useNavigate();

  const {userContextUserName, setUserName, isUserLoggedIn, setUserLoggedIn } = useContext(UserContext);

  if (isUserLoggedIn === true) {
      return(
        <AppBar 
        >
            <Toolbar>
                <Typography variant="h4">
                    Welcome {userContextUserName}
                </Typography>
                <Button
                    color="secondary"
                    variant='contained' 
                    size='large'
                    // onClick={() => navigate("/register")}
                >
                    Edit Account
                </Button>
                <Button
                    color="secondary"
                    variant='contained' 
                    size='large'
                    // onClick={() => navigate("/register")}
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

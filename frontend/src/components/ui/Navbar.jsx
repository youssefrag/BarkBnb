import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {

  let navigate = useNavigate();

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
                onClick={() => navigate("/register")}
            >
                Sign Up
            </Button>
        </Toolbar>
    </AppBar>
  )
}

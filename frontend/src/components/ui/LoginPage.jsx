import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { UserContext } from '../context/userContext';

const useStyles = makeStyles({
    root: {
        marginTop:'100px'
    }
})

export const LoginPage = () => {

    const classes = useStyles()

    let navigate = useNavigate();

    const {userContextName, setName, userContextEmail, setUserEmail, isUserLoggedIn, setUserLoggedIn } = useContext(UserContext);

    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser(prev => ({...user, [name]: value}))
    }

    const handleSubmit = () => {
        const { email, password } = user
        if ( !email || !password) {
            alert('Empty Values!')
            return
        }
        fetch('http://127.0.0.1:8000/api/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(async (response) => {
            let result = await response.json()
            setName(result.first_name)
            setUserEmail(result.email)
            setUserLoggedIn(true)
            navigate('/profile')
        })
    }

      return(
        <div className={classes.root}>
          <Typography
            variant='h3'
          >
            Please login to book sitting
          </Typography>
          <form
            id="registration-form"
            noValidate 
            autoComplete="off"
          >
            <TextField
              type="text"
              label="Email"
              name='email'
              color="secondary"
              required
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              type="password"
              label="Password"
              name='password'
              color="secondary"
              required
              value={user.password}
              onChange={handleChange}
            />
            <Button
              variant='contained' 
              size='large'
              onClick={handleSubmit}
    
            >
              Login!
            </Button>
          </form>
        </div>
      )
}

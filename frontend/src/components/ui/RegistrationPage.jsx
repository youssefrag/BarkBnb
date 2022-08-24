import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

})

export const RegistrationPage = () => {

  const classes = useStyles()

  return (
    <div 
    >
        <div 
        >
            <Typography
                variant='h3'
                // className={classes.title}
            >
                Registration Page
            </Typography>
            <form
                id="registration-form"
                noValidate 
                autoComplete="off"
            >
            <TextField
                type="text"
                label="Name"
                name='name'
                color="secondary"
                required
                // value={user.name}
                // onChange={handleChange}
                // className={classes.field}
                // sx={{
                //     marginBottom: '20px'
                // }}
            />
            <TextField
                className={classes.input}
                type="text"
                label="Email"
                name='email'
                color="secondary"
                required
                // value={user.email}
                // onChange={handleChange}
                // className={classes.field}
                // sx={{
                //     marginBottom: '20px'
                // }}
            />
            <TextField
                type="password"
                label="Password"
                name='password'
                color="secondary"
                required
                // value={user.password}
                // onChange={handleChange}
                // sx={{
                //     marginBottom: '20px'
                // }}
            />
            <div
            >
                <Button
                    variant='contained' 
                    size='large'
                    // onClick={handleSubmit}
                >
                    Register!
                </Button>
            </div>
            </form>
        </div>
    </div>
  )
}

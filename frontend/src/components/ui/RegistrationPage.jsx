import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography } from '@mui/material';

export const RegistrationPage = () => {
  return (
    <div 
        // className={classes.form}
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
            // style={{
            //     display: 'flex',
            //     flexDirection: 'column',
            //     alignItems: 'center'
            // }}
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
            // className={classes.field}
            // sx={{
            //     marginBottom: '20px'
            // }}
        />
        <Button
            variant='contained' 
            size='large'
            // onClick={handleSubmit}
        >
            Register!
        </Button>
        </form>
    </div>
  )
}

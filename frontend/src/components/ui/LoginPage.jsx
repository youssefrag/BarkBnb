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


    return (
    <div className={classes.root}>LoginPage</div>
    )
}

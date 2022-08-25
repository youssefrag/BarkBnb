import React from 'react'

import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';


const useStyles = makeStyles({
    root: {
        marginTop:'100px'
    }
})

export const EditAccount = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography
                variant='h3'
            >
                Edit Account
            </Typography>
        </div>
    )
}   

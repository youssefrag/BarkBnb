import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { Typography, TextField } from '@mui/material';

import { UserContext } from '../context/userContext';
import { useContext } from 'react';


const useStyles = makeStyles({
    root: {
        marginTop:'100px'
    }
})

export const EditAccount = () => {

    const classes = useStyles()

    let navigate = useNavigate();

    const { userContextName } = useContext(UserContext);

    let [profile, setProfile] = useState({
        name: userContextName,
        username: '',
        bio: '',
        profile_image: null,
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setProfile(prev => ({...profile, [name]: value}))
    }

    const handlePictureUpload = (e) => {
        const name = e.target.name
        const file = e.target.files[0]
        setProfile(prev => ({...profile, [name]: file}))
    }

    return (
        <div className={classes.root}>
            <Typography
                variant='h3'
            >
                Edit Account
            </Typography>
            <form
                id='edit-account'
                noValidate
                autoComplete='off'
            >
            <TextField
                type="text"
                label="Name"
                name='name'
                color="secondary"
                required
                value={profile.name}
                onChange={handleChange}
                // className={classes.field}
            />
            <TextField
                type="text"
                label="Username"
                name='username'
                color="secondary"
                required
                value={profile.username}
                onChange={handleChange}
                // className={classes.field}
            />
            <TextField
                type="text"
                label="Bio"
                name='bio'
                color="secondary"
                required
                value={profile.bio}
                onChange={handleChange}
                // className={classes.field}
            />
            <label>
                Profile Image
                <input 
                    type="file"
                    name='profile_image'
                    onChange={handlePictureUpload}
                />
            </label>
            </form>
        </div>
    )
}   

import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { Typography, TextField, Button } from '@mui/material';

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

    const { userContextName, userContextEmail } = useContext(UserContext);

    let [profile, setProfile] = useState({
        name: userContextName,
        email: userContextEmail,
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

    const handleSubmit = () => {
        const profileUploadData = new FormData()
        profileUploadData.append('name', profile.name)
        profileUploadData.append('email', profile.email)
        profileUploadData.append('bio', profile.bio)
        profileUploadData.append('profile_image', profile.profile_image, profile.profile_image.name)

        fetch(`http://127.0.0.1:8000/api/profile-edit/${userContextEmail}`, {
            method: "POST",
            body: profileUploadData
        })
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
                enctype="multipart/form-data"
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

            <Button
                    variant='contained' 
                    size='large'
                    onClick={handleSubmit}
                >
                    Update Profile!
                </Button>
            </form>
        </div>
    )
}   

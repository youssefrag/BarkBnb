import { useState, useEffect } from 'react'

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        marginTop:'100px'
    }
})
export const ProfilesPage = () => {

    
    const classes = useStyles()
    
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        imageLink: '',
        sitting_completed: null,
    })

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        getProfiles();
    }, [])


    const getProfiles = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/profiles', {
            method: "GET"
        })
        let data = await response.json()
        let profilesArray = []
        for (let i = 0; i < data.length; i++) {
            let profileObject = {}
            profileObject.name = data[i].name
            profileObject.bio = data[i].bio
            profileObject.sitting_completed = data[i].sitting_completed
            profileObject.imageLink = 'http://127.0.0.1:8000' + data[i].profile_image
            profilesArray = profiles.push(profileObject)
            setProfiles([profilesArray]) 
        }

    }
    
    console.log(profiles)

    return (
        <div className={classes.root}>
            ProfilesPage
            {/* <img alt='profile' src={img} /> */}
        </div>
    )
}

import { useState, useEffect } from 'react'

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        marginTop:'100px'
    }
})
export const ProfilesPage = () => {

    
    const classes = useStyles()
    useEffect(() => {
        getProfiles()
    })
    
    const [profiles, setProfiles] = useState([])

    let imgLink = ''

    let getProfiles = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/profiles', {
            method: "GET"
        })
        let data = await response.json()
        // console.log(data[0].profile_image)
        imgLink = 'http://127.0.0.1:8000' + data[0].profile_image
        console.log(imgLink)
    }
        

    return (
        <div className={classes.root}>
            ProfilesPage
            <img alt='profile' src={imgLink} />
        </div>
    )
}

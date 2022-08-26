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

    let getProfiles = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/profiles', {
            method: "GET"
        })
        let data = await response.json()
        console.log(data)
    }
        
    const [profiles, setProfiles] = useState([])
    return (
        <div className={classes.root}>ProfilesPage</div>
    )
}

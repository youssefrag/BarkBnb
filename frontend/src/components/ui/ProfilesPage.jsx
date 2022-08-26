import { useState } from 'react'

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
        sittings_completed: null,
        bio: '',
        profile_image: '',
    })
    return (
        <div className={classes.root}>ProfilesPage</div>
    )
}

import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        marginTop:'100px'
    }
})
export const ProfilePage = () => {

    const classes = useStyles()

    const {userContextName, setName, userContextEmail, setUserEmail} = useContext(UserContext);

    return (
        <div className={classes.root}>ProfilePage</div>
    )
}

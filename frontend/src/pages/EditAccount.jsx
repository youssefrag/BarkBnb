import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { Typography, TextField, Button, Container, Box } from "@mui/material";

import { UserContext } from "../context/userContext";
import { useContext } from "react";

const useStyles = makeStyles({
  //   field: {
  //     // backgroundColor: "#fff",
  //     width: "100%",
  //     borderRadius: "9px",
  //   },
});

const styling = {
  resize: {
    fontSize: "2rem",
  },
};

export const EditAccount = () => {
  const classes = useStyles();

  let navigate = useNavigate();

  const { userContextName, userContextEmail } = useContext(UserContext);

  let [profile, setProfile] = useState({
    name: userContextName,
    email: userContextEmail,
    bio: "",
    profile_image: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile((prev) => ({ ...profile, [name]: value }));
  };

  const handlePictureUpload = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setProfile((prev) => ({ ...profile, [name]: file }));
  };

  const handleSubmit = () => {
    const profileUpdateData = new FormData();
    profileUpdateData.append("name", profile.name);
    profileUpdateData.append("email", profile.email);
    profileUpdateData.append("bio", profile.bio);
    profileUpdateData.append(
      "profile_image",
      profile.profile_image,
      profile.profile_image.name
    );

    fetch(`http://127.0.0.1:8000/api/profile-edit/${userContextEmail}`, {
      method: "POST",
      body: profileUpdateData,
    });
  };

  return (
    <Box marginTop={12}>
      <Container className={classes.heroContainer} marginTop={9} maxWidth="lg">
        <Typography
          Typography
          variant="h2"
          color="primary.dark3"
          marginBottom={4}
        >
          Edit Account
        </Typography>
        <form
          id="edit-account"
          noValidate
          autoComplete="off"
          enctype="multipart/form-data"
        >
          <TextField
            focused
            fullwidth
            type="text"
            label="Name"
            name="name"
            color="primary"
            class={classes.field}
            InputProps={{
              style: styling.resize,
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            required
            value={profile.name}
            onChange={handleChange}
          />
          <TextField
            type="text"
            label="Bio"
            name="bio"
            color="primary"
            InputProps={{
              style: styling.resize,
            }}
            InputLabelProps={{
              style: { color: "#000", fontSize: "2rem" },
            }}
            required
            value={profile.bio}
            onChange={handleChange}
            // className={classes.field}
          />
          <label>
            Profile Image
            <input
              type="file"
              name="profile_image"
              onChange={handlePictureUpload}
            />
          </label>

          <Button variant="contained" size="large" onClick={handleSubmit}>
            Update Profile!
          </Button>
        </form>
      </Container>
    </Box>
  );
};

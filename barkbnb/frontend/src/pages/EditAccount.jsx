import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { makeStyles, createStyles } from "@mui/styles";
import { Typography, TextField, Button, Container, Box } from "@mui/material";

import { UserContext } from "../context/userContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainBox: {
      backgroundColor: theme.palette.primary.light1,
      borderRadius: "11px",
      boxShadow: "0 2.4rem 4.8rem rgba( 0,0,0,0.15)",
      height: "50rem",
      width: "100%",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      [theme.breakpoints.down("lg")]: {
        height: "60rem",
      },
    },
    information: {
      padding: "4rem",
    },
    textfields: {
      display: "flex",
      gap: "10rem",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
    imageContainer: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1626435872663-b0a64169c460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1418&q=80')",

      backgroundSize: "cover",
      width: "auto",
      backgroundPosition: "-12rem",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
  })
);

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
    if (!profile.profile_image) {
      alert("Please upload picture");
      return;
    }
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
    }).then(() => {
      console.log("reached here");
      navigate("/profiles");
    });
  };

  return (
    <Box marginTop={12}>
      <Container className={classes.heroContainer} marginTop={9} maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box className={classes.information}>
            <Typography
              Typography
              variant="h2"
              color="primary.dark3"
              marginBottom={8}
            >
              Edit Account
            </Typography>
            <form
              id="edit-account"
              noValidate
              autoComplete="off"
              enctype="multipart/form-data"
            >
              <Box marginBottom={8} className={classes.textfields}>
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
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "9px",
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
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "9px",
                  }}
                  required
                  value={profile.bio}
                  onChange={handleChange}
                  // className={classes.field}
                />
              </Box>
              <Box>
                <label style={{ fontSize: "2rem" }}>
                  Profile Image
                  <input
                    type="file"
                    name="profile_image"
                    onChange={handlePictureUpload}
                  />
                </label>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#04111c",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#04111c",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  Update Profile!
                </Button>
              </Box>
            </form>
          </Box>
          <Box className={classes.imageContainer}></Box>
        </Box>
      </Container>
    </Box>
  );
};

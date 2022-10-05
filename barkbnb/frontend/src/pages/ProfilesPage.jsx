import { useState, useEffect } from "react";

import { Typography, Button, Container, Box } from "@mui/material";

import { ProfileCard } from "../components/ProfileCard";

import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    profileCards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      columnGap: "5rem",
      rowGap: "5rem",
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr 1fr",
      },
    },
  })
);

export const ProfilesPage = () => {
  const classes = useStyles();

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/profiles");
    let data = await response.json();
    setProfiles(data);
  };

  let renderProfiles = [];

  renderProfiles = profiles.map((profile) => {
    const imgLink = "http://127.0.0.1:8000" + profile.profile_image;
    console.log(profile.name);

    return <ProfileCard name={profile.name} imageLink={imgLink} />;
  });

  return (
    <Box marginTop={12}>
      <Container className={classes.dogsContainer} marginTop={9} maxWidth="lg">
        <Typography variant="h1" marginBottom={9}>
          User Profiles
        </Typography>
        <Box className={classes.profileCards}>{renderProfiles}</Box>
      </Container>
    </Box>
  );
};

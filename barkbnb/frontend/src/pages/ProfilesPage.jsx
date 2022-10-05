import { useState, useEffect } from "react";

import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";

import { ProfileCard } from "../components/ProfileCard";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
  profileCard: {
    border: "1px solid",
  },
});

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
    console.log(profile.profile_image);

    return <ProfileCard imageLink={imgLink} />;
  });

  return (
    <div className={classes.root}>
      ProfilesPage
      {renderProfiles}
    </div>
  );
};

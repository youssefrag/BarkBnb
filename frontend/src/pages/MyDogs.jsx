import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { Typography, TextField, Button, Container, Box } from "@mui/material";

export const MyDogs = () => {
  const { userContextEmail } = useContext(UserContext);
  return <Box marginTop={12}>MyDogs for {userContextEmail}</Box>;
};

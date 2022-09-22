import { useState } from "react";

import { makeStyles, createStyles } from "@mui/styles";
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  MenuItem,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";

import { useParams, useNavigate } from "react-router-dom";

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
    },
    information: {
      padding: "4rem",
    },
    fields: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "6rem",
      rowGap: "4rem",
    },
    field: {
      backgroundColor: "#fff",
      width: "100%",
      borderRadius: "9px",
    },
    imageContainer: {
      backgroundImage: "url('/images/create-sitting.png')",

      backgroundSize: "cover",
      width: "auto",
      backgroundPosition: "-12rem",
    },
  })
);

const styling = {
  resize: {
    fontSize: "2rem",
  },
};

const cities = [
  {
    value: "MTL",
    label: "Montreal, Quebec",
  },
  {
    value: "TOR",
    label: "Toronto, Ontario",
  },
  {
    value: "VAN",
    label: "Vancouver, British Columbia",
  },
  {
    value: "CAL",
    label: "Calgary, Alberta",
  },
  {
    value: "OTT",
    label: "Ottawa, Ontario'",
  },
];

export const CreateSitting = () => {
  const { dogName } = useParams();

  const classes = useStyles();

  let [sitting, setSitting] = useState({
    dog: dogName,
    city: undefined,
    startDate: null,
    endDate: null,
  });

  const handleCityChange = (e) => {
    setSitting((prev) => ({ ...sitting, city: e.target.value }));
  };

  const handleSubmit = () => {
    console.log(sitting);
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
              marginBottom={9}
              marginTop={5}
            >
              {dogName} needs a sitter 🐾
            </Typography>
            <Box className={classes.fields}>
              <DatePicker
                label="Start Date"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      style: styling.resize,
                    }}
                    InputLabelProps={{
                      style: { color: "#868e96", fontSize: "2.4rem" },
                    }}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "9px",
                    }}
                  />
                )}
                value={sitting.startDate}
                onChange={(newValue) => {
                  setSitting((prev) => ({ ...sitting, startDate: newValue }));
                }}
              />
              <DatePicker
                label="End Date"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      style: styling.resize,
                    }}
                    InputLabelProps={{
                      style: { color: "#868e96", fontSize: "2.4rem" },
                    }}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "9px",
                    }}
                  />
                )}
                value={sitting.endDate}
                onChange={(newValue) => {
                  setSitting((prev) => ({ ...sitting, endDate: newValue }));
                }}
              />
              <TextField
                select
                fullWidth
                label="Where are you located?"
                className={classes.field}
                InputProps={{
                  style: styling.resize,
                }}
                InputLabelProps={{ style: { fontSize: "2rem" } }}
                value={sitting.city}
                onChange={handleCityChange}
              >
                {cities.map((city) => (
                  <MenuItem sx={{ fontSize: "1.8rem" }} key={city} value={city}>
                    {city.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                className={classes.btn}
                sx={{
                  backgroundColor: "#04111c",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#04111c",
                  },
                }}
                onClick={handleSubmit}
              >
                Post sitting
              </Button>
            </Box>
          </Box>
          <Box className={classes.imageContainer}></Box>
        </Box>
      </Container>
    </Box>
  );
};

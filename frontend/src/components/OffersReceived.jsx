import { useContext, useState } from "react";
import { Toolbar, Box, Button, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { UserContext } from "../context/userContext";
import { useEffect } from "react";

let rows = [{ id: 1, offer: "name" }];

const handleAccept = () => {
  console.log("accept offer");
};

const datagridSx = {
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "primary.light2",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
    fontSize: 16,
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": {
        backgroundColor: "grid.main",
      },
    },
  },
};

const getColumns = () => {
  return [
    {
      field: "offer",
      headerName: "Offers",
      minWidth: 250,
      renderCell: (cellValues) => {
        return (
          <Box sx={{ color: "primary.main", fontSize: 18, fontWeight: "bold" }}>
            {cellValues.value}
          </Box>
        );
      },
    },
    {
      field: "accepted",
      headerName: "accepted",
      minWidth: 200,
    },
    {
      field: "sitter",
      headerName: "sitter",
      minWidth: 300,
      renderCell: (cellValues) => {
        return <div>{cellValues.value ? cellValues.value[0] : ""}</div>;
      },
    },
    {
      field: "Accept",
      minWidth: 100,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            sx={{
              height: "4rem",
              width: "8rem",
              fontSize: "1.2rem",
            }}
            onClick={() => {
              handleAccept();
            }}
          >
            Accept
          </Button>
        );
      },
    },
  ];
};

export const OffersReceived = () => {
  const { userContextName } = useContext(UserContext);

  const [offersReceived, setOffersReceived] = [];

  const getOffersReceived = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/get-offers-received/${userContextName}`
    );
    let data = await response.json();
    console.log(data);
    setOffersReceived(data);
  };

  useEffect(() => {
    getOffersReceived();
  }, []);

  return (
    <Container maxWidth="md" sx={{ height: "30rem", marginTop: "10rem" }}>
      <DataGrid
        rows={rows}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
        sx={datagridSx}
        components={{
          Toolbar: () => <Toolbar></Toolbar>,
        }}
      ></DataGrid>
      ;
    </Container>
  );
};

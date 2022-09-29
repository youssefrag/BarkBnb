import { useContext, useState } from "react";
import { Toolbar, Box, Button, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { UserContext } from "../context/userContext";
import { useEffect } from "react";

const handleAccept = () => {
  console.log("accept offer");
};

const datagridSx = {
  height: "90rem",
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
      field: "sitter",
      headerName: "Sitter",
      minWidth: 50,
      // renderCell: (cellValues) => {
      //   return (
      //     <Box sx={{ color: "primary.main", fontSize: 18, fontWeight: "bold" }}>
      //       {cellValues.value}
      //     </Box>
      //   );
      // },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      minWidth: 50,
    },
    {
      field: "endDate",
      headerName: "End Date",
      minWidth: 50,
    },
    {
      field: "price",
      headerName: "price",
      minWidth: 50,
    },
    {
      field: "Accept",
      minWidth: 50,
      renderCell: () => {
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

  const [offersReceived, setOffersReceived] = useState([]);

  const getOffersReceived = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/get-offers-received/${userContextName}`
    );
    let data = await response.json();
    setOffersReceived(data);
  };

  useEffect(() => {
    getOffersReceived();
  }, []);

  const gridRowsArray = [];

  for (let i = 0; i < offersReceived.length; i++) {
    let offerObject = {};
    offerObject.id = offersReceived[i].sitter.id;
    offerObject.sitter = offersReceived[i].sitter.name;
    offerObject.startDate = offersReceived[i].sitting.start_date;
    offerObject.endDate = offersReceived[i].sitting.end_date;
    offerObject.price = offersReceived[i].price;
    gridRowsArray.push(offerObject);
  }

  console.log(gridRowsArray);

  return (
    <Container maxWidth="md" sx={{ height: "30rem", marginTop: "10rem" }}>
      <DataGrid
        rows={gridRowsArray}
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

import { useContext, useState } from "react";
import { Button, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { UserContext } from "../context/userContext";
import { useEffect } from "react";

const handleAccept = (offerId) => {
  fetch(`http://127.0.0.1:8000/api/accept-offer/${offerId}`, {
    method: "POST",
  }).then(() => {
    console.log("offer has been accepted");
  });
};

const datagridSx = {
  height: "60rem",
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
        backgroundColor: "primary.light2",
      },
    },
  },
  "& .MuiDataGrid-cellContent": {
    fontSize: 16,
  },
  "& .MuiTablePagination-displayedRows": {
    fontSize: "2rem ",
  },
};

const getColumns = () => {
  return [
    {
      field: "sitter",
      headerName: "Sitter",
      minWidth: 150,
    },
    {
      field: "dog",
      headerName: "Dog",
      minWidth: 120,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      minWidth: 175,
    },
    {
      field: "endDate",
      headerName: "End Date",
      minWidth: 175,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
    },
    {
      field: "id",
      headerName: "Accept",
      minWidth: 50,
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
              handleAccept(cellValues.id);
              window.location.reload();
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
    offerObject.id = offersReceived[i].id;
    offerObject.sitter = offersReceived[i].sitter.name;
    offerObject.startDate = offersReceived[i].sitting.start_date;
    offerObject.endDate = offersReceived[i].sitting.end_date;
    offerObject.price = offersReceived[i].price;
    offerObject.dog = offersReceived[i].sitting.dog.name;
    gridRowsArray.push(offerObject);
  }

  return (
    <Container maxWidth="md" sx={{ height: "30rem" }}>
      <DataGrid
        rows={gridRowsArray}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
        sx={datagridSx}
      ></DataGrid>
      ;
    </Container>
  );
};

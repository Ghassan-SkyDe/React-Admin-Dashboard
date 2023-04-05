import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID"},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 2,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 0,
    }
  ];
  
  return (
    <Box height="75vh" width="75vw" m="20px" sx={{
      "& .MuiDataGrid-root" : {
        border: "none"
      },
      "& .MuiDataGrid-cell": {
        border: "none"
      },
      "& .name-column--cell": {
        color: colors.greenAccent[300],
      },
      "& .MuiDataGrid-columnHeadersInner": {
        backgroundColor: colors.blueAccent[700],
      },
      "& .MuiDataGrid-columnHeaders": {
        borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller" : {
        backgroundColor: colors.primary[400]
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700]
      },
      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `${colors.gray[100]} !important`
      }
    }}>
      <DataGrid tabI className="data-grid" rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }}/>
    </Box>
  )
}

export default Contacts
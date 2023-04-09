import { Box, Stack } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useColors } from "../../hooks/useColors";
// to prevent repeating classes/pagesize
const DataGridComponent = ({ columns, rows, checkbox, Toolbar }) => {
  const { colors } = useColors();

  return (
  <Stack width="100%" display="grid">
    <Box  height="75vh" width="75vw" m="20px" sx={{
      justifySelf: "center",
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
      },
      "& .MuiCheckbox-root": {
        color: `${colors.greenAccent[200]} !important`
      }
    }}>
        <DataGrid
         pageSizeOptions={[5, 15, 100]} 
         columns={columns} 
         rows={rows} 
         className="data-grid" 
         checkboxSelection={checkbox} 
         components={Toolbar ? { Toolbar: GridToolbar } : null}/>

    </Box>
  </Stack>
  )
}

export default DataGridComponent
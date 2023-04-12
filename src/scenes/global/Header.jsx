import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useColors } from "../../hooks/useColors";
import { DownloadOutlined } from "@mui/icons-material";

import { headerConstants } from "./constants";

const Header = () => {
    const { colors } = useColors();
    const handleDownloadReports = () => {console.log("Download report")};
    const path = useLocation().pathname;
    const data = headerConstants[path];
    console.log(data);
    
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{padding:"0 1rem"}}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h2" color={colors.gray[100]} fontWeight="bold" sx={{mb:"5px"}}>{data.title}</Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>{data.subtitle}</Typography>
        </Box>
      {data.title === "Dashboard" && (
      <Box>
         <Button sx={{ 
           backgroundColor:colors.blueAccent[700],
           color: colors.gray[100],
           fontSize: "14px",
           fontWeight: "bold",
           padding: "10px 20px"}}
           onClick={handleDownloadReports}>
             <DownloadOutlined sx={{mr: "10px"}}/>
             Download Reports
         </Button>
      </Box>)}
    </Box>
  )
}

export default Header
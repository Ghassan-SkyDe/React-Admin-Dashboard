import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useColors } from "../../hooks/useColors";
import { DownloadOutlined } from "@mui/icons-material";


const Header = () => {
    const { colors } = useColors();
    const handleDownloadReports = () => {console.log("Download report")}
    const path = useLocation().pathname.slice(1);
    const title = path === "" ? "Dashboard" : path;
    // change this at last--fixIt
    const isChartPage = path === "pie" || path === "bar" || path === "line" || path === "geography" ? true : false;
    // subtitles
    // team => Managing the Team Members
    // contacts => list of Contacts for Future Reference 
    // contacts => list of Contacts for Future Reference 
    // invoices => list of Invoices balances 
    // form => create new user profile
    // calendar => fullCalendar interactive page
    // faq => Frequently Asked Questions Page
    // bar => Bar chart page for more details
    // pi => Pi chart page for more details
    // line => Line chart page for more details
    // geography => Geography Chart page for more details
    // dashboard => welcome to your dashboard
    
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{padding:"0 1rem"}}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h2" color={colors.gray[100]} fontWeight="bold" sx={{mb:"5px"}}>{title.toUpperCase()}</Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>{`Welcome to your ${title} ${isChartPage ? "chart" : ''} page`}</Typography>
        </Box>
      {title === "Dashboard" && (
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
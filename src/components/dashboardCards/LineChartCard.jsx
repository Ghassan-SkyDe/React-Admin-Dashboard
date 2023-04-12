import { Box, IconButton, Typography } from "@mui/material"
import { useColors } from "../../hooks/useColors"
import { DownloadOutlined } from "@mui/icons-material";
import { LineChart } from "../charts";

// replace with fechted data
const lineChartNumber = 59342032;


const LineChartCard = ({ xsGridColumn, mdGridColumn }) => {
  const { colors } = useColors();
  const downloadLineStatsHandle = () => {console.log("downloadLineStats")};

  return (
    <Box 
        sx={{ gridColumn: { xs: xsGridColumn , md: mdGridColumn } }}
        gridRow="span 2"
        backgroundColor={colors.primary[400]}>
        {/* LineChart----title */}
        <Box m="1rem 1rem 0 1rem" display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h3" fontWeight="600" color={colors.gray[100]}>Revenue Generated</Typography>
            <Typography variant="h4" fontWeight="500" color={colors.greenAccent[500]} >
              {`$ ${lineChartNumber.toLocaleString()}`}
            </Typography>
          </Box>
          <IconButton onClick={downloadLineStatsHandle}>
            <DownloadOutlined sx={{ fontSize: "30px", color: colors.greenAccent[500]} }/>
          </IconButton>

        </Box>
        {/* LineChart----component */}
        <Box height="260px" mt="-20px">
          <LineChart isMinimal/>
        </Box>
      </Box>
  )
}

export default LineChartCard
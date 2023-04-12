import { Box, Typography } from "@mui/material"
import { GeographyChart } from "../charts"
import { useColors } from "../../hooks/useColors"


const GeographyChartCard = ({ xsGridColumn, mdGridColumn, xlGridColumn} ) => {
  const { colors } = useColors();  
  return (
    <Box
       sx={{ 
        gridColumn:{ 
          xs: xsGridColumn ? xsGridColumn : undefined , 
          md: mdGridColumn ? mdGridColumn : undefined , 
          xl: xlGridColumn ? xlGridColumn : undefined  
        }}}
       gridRow="span 2" 
       p="30px"
       backgroundColor={colors.primary[400]} >
        <Typography variant="h5" fontWeight="600">Geography Based Traffic</Typography>
        <Box height="260px" mt="-25px">
          <GeographyChart isMinimal />
        </Box>
      </Box>
  )
}

export default GeographyChartCard
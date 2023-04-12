import { Box, Typography } from "@mui/material"
import { useColors } from "../../hooks/useColors"
import ProgressCircle from "../progressCircle/ProgressCircle";

// replace with fechted data
const revenue = 48352;

const CampaignCard = ( { xsGridColumn, smGridColumn, mdGridColumn, xlGridColumn }) => {
  const { colors } = useColors(); 
  return (
    <Box
       sx={{ 
        gridColumn: { 
          xs: xsGridColumn, 
          sm: smGridColumn, 
          md: mdGridColumn, 
          xl: xlGridColumn 
       }}}
       gridRow="span 2" 
       backgroundColor={colors.primary[400]} 
       p="30px">
        <Typography variant="h5" fontWeight="600">Campaign</Typography>
        <Box dispay="flex" flexDirection="column" alignItems="center" mt="25px">
          <ProgressCircle size="125" />
          <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px"}}>
            {`$ ${revenue.toLocaleString()} revenue generated`}
          </Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      </Box>
  )
}

export default CampaignCard
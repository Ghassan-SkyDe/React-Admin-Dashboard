import { Box, Typography } from "@mui/material";
import { useColors } from "../../hooks/useColors";
import ProgressCircle from "./ProgressCircle";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";



const StatBox = ({ title, subtitle, progress, increase, name }) => {
  const { colors } = useColors();
  const icons = {
    emails: <Email sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>,
    clients: <PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>,
    sales: <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>,
    traffic: <Traffic sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>,
  }
  return (
    
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icons[name]}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
    
  )
}

export default StatBox
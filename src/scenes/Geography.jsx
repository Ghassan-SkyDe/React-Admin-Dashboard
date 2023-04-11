import { Box } from "@mui/material";
import { GeographyChart } from "../components/charts";
import { useColors } from "../hooks/useColors";


const Geography = () => {
  const { colors } = useColors();
  return (
   <Box height="80vh" width="85vw" border={`1px dashed  ${colors.gray[100]}`} m="1rem auto">
     <GeographyChart />
   </Box>
  )
}

export default Geography
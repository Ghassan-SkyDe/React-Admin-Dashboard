import { Box } from "@mui/material";
import GeographyChart from "../components/charts/GeographyChart";
import { mockGeographyData } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { useColors } from "../hooks/useColors";


const Geography = () => {
  const { colors } = useColors();
  return (
   <Box height="75vh" width="85vw" border={`1px solid ${colors.gray[100]}`} m="0 auto">
     <GeographyChart data={mockGeographyData} features={geoFeatures.features}/>
   </Box>
  )
}

export default Geography
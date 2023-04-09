import { Box, Typography } from "@mui/material"
import { useColors } from "../../hooks/useColors"
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const { colors } = useColors();
  return (
    <Box width="100%">
        <Box display="flex" justifyContent="space-between">
            <Box>
                {icon}
            </Box>
            <Typography variant="h4" fontWeight="bold" sx={{ color: colors.gray[100]}}>
                {title}
            </Typography>
            <Box>
                <ProgressCircle progress={progress}/>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500]}}>
                  {subtitle}
                </Typography>
                <Typography variant="h4" fontStyle="italic" sx={{ color: colors.greenAccent[600]}}>
                  {increase}
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default StatBox
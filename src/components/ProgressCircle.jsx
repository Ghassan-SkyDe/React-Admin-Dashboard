import { Box, Typography, useTheme } from "@mui/material";
import { useColors } from "../hooks/useColors"

const ProgressCircle = ( { progress = "0.74", size = "40" }) => {
  const { colors } = useColors();
  const angle = progress * 360;
      
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default ProgressCircle
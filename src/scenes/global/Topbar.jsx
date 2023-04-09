import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext  } from "../../theme";
import InputBase from "@mui/material/InputBase";
import { 
  LightModeOutlined, 
  DarkModeOutlined, 
  NotificationsOutlined, 
  SettingsOutlined, 
  PersonOutline, 
  Search } from "@mui/icons-material";
import { useColors } from "../../hooks/useColors";

const Topbar = () => {
  const theme = useTheme();
  const { colors } = useColors();
  const colorMode = useContext(ColorModeContext);
  
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <Search/>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <LightModeOutlined/> : <DarkModeOutlined/>}
        </IconButton>

        <IconButton>
          <NotificationsOutlined/>
        </IconButton>

        <IconButton>
          <SettingsOutlined/>
        </IconButton>

        <IconButton>
          <PersonOutline/>
        </IconButton>

      </Box>
    </Box>
  )
}

export default Topbar;
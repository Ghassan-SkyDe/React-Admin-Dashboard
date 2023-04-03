import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Avatar from '@mui/material/Avatar';
import {
    KeyboardDoubleArrowLeftIcon,
    KeyboardDoubleArrowRightIcon
} from "./icons";
import { Box, IconButton, Typography, colors, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from 'react-router-dom';

import { sidebarData } from "./constants";



const Tag = ({ tag }) => {
  return(
    <Typography variant="h6" color={colors.grey[500]} sx={{ m: "25px 0 5px 20px" }}>
      {tag}
    </Typography>      
  )
}

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Menu menuItemStyles={{
      button: ({active}) => {
        return {
            background : active ? "red" : 'transparent',
            '&:hover': {
              backgroundColor: 'red',
            },
          };
      }
    }}>
      <MenuItem className="sidebar-mune-item"
      active={selected === title}
      style={{
        color: colors?.gray[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} title="none"/>}
    >
      <Typography>{title}</Typography>
    </MenuItem>
    </Menu>
  );
};

const SidebarNav = () => {
  const USER = null;
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box>
      <Sidebar className="sidebar" rootStyles={{
       backgroundColor: colors.primary[400],
       }}>
        <Menu className="sidebar-header">
          {!collapsed && <Typography>ADMINS</Typography>}
          <IconButton className="sidebar-header-item" onClick={() => collapseSidebar()} >{collapsed ? <KeyboardDoubleArrowRightIcon/> : <KeyboardDoubleArrowLeftIcon/> }</IconButton>
        </Menu>
        {!collapsed && <Box className="sidebar-user">
          {USER ? <Avatar src={USER?.image} /> : <Avatar src="/broken-image.jpg" />}
          <Typography>{USER ? USER?.name : "User Name"}</Typography>
        </Box>}

        <Box>
         {sidebarData.map((item) => item.name === "item" 
         ? <Item key={item.id} {...item} selected={selected} setSelected={setSelected}/> 
         : <Tag key={item.id} tag={item.title}/>)}
        </Box>

      </Sidebar>
    </Box>
  )
};

export default SidebarNav;



import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { KeyboardDoubleArrowLeftIcon, KeyboardDoubleArrowRightIcon } from "./icons";
import { Box, IconButton, Typography, colors, Avatar, useTheme } from "@mui/material";
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
  // replace with real User data
  const USER = null;
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

          {USER 
          ? <Avatar sx={{ width: {xs: 35 , sm: 60}, height: {xs: 35 , sm: 60} }} src={USER?.image} /> 
          : <Avatar sx={{ width: {xs: 35 , sm: 60}, height: {xs: 35 , sm: 60} }} src="/broken-image.jpg" />}

          <Typography variant="h3" color={colors.gray[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
            {USER ? USER?.name : "User Name"}
          </Typography>
          <Typography variant="h6" color={colors.greenAccent[500]}>
            VP Fancy Admin      
          </Typography>
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



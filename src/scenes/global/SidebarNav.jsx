import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import { Link } from 'react-router-dom';

import { sidebarData } from "./constants";
import { useColors } from "../../hooks/useColors";
import profilePic from "../../assets/avatar.jpg";





const SidebarNav = () => {
  // replace with real ADMIN data
  // example 
  const ADMIN = { name: "sky de", image: profilePic};

  const { collapseSidebar, collapsed } = useProSidebar();
  const { colors } = useColors();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar className="sidebar" rootStyles={{
       backgroundColor: colors.primary[400],
       }}>
        <Menu className="sidebar-header">
          {!collapsed && <Typography variant="h4" color={colors.gray[100]}>ADMINS</Typography>}
          <IconButton className="sidebar-header-item" onClick={() => collapseSidebar()} >{collapsed ? <KeyboardDoubleArrowRightIcon/> : <KeyboardDoubleArrowLeftIcon/> }</IconButton>
        </Menu>
        {!collapsed && <Box className="sidebar-user">

          <Avatar sx={{ width: {xs: 35 , sm: 60}, height: {xs: 35 , sm: 60} }} src={ADMIN ? ADMIN?.image : "/broken-image.jpg"} /> 
          <Typography textTransform="capitalize" variant="h3" color={colors.gray[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
            {ADMIN ? ADMIN?.name : "User Name"}
          </Typography>
          <Typography variant="h6" color={colors.greenAccent[500]}>
            VIP Fancy Admin      
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



// these componets only used in SidebarNav
const Tag = ({ tag }) => {
  const { colors } = useColors();
  return(
    <Typography variant="h6" color={colors.gray[500]} sx={{ m: "25px 0 5px 20px" }}>
      {tag}
    </Typography>      
  )
}

const Item = ({ title, to, icon, selected, setSelected }) => {
  const { colors } = useColors();
  return (
    <Menu menuItemStyles={{
      button: ({active}) => {
        return {
            background : active ? colors.greenAccent[500] : 'transparent',
            '&:hover': {
              backgroundColor: colors.greenAccent[400],
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

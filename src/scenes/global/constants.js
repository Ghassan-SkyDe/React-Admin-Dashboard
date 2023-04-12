import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// data for sidebar / to prevent repeat sidebar elements using maping this data
export const sidebarData = [ 
  {
    id:1,
    name: "item",
    title: "Dashboard",
    icon: <HomeOutlinedIcon/>,
    to: "/"
  },
  {
    id:2,
    name: "tag",
    title: "Data",
  },
  {
    id:3,
    name: "item",
    title: "Manage Team",
    icon: <PeopleOutlinedIcon/>,
    to: "/team"
  },
  {
    id:4,
    name: "item",
    title: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    to: "/contacts"
  },
  {
    id:5,
    name: "item",
    title: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    to: "/invoices"
  },
  {
    id:6,
    name: "tag",
    title: "Pages",
  },
  {
    id:7,
    name: "item",
    title: "Profile Form",
    icon: <PersonOutlinedIcon />,
    to: "/form"
  },
  {
    id:8,
    name: "item",
    title: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    to: "/calendar"
  },
  {
    id:9,
    name: "item",
    title: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    to: "/faq"
  },
  {
    id:10,
    name: "tag",
    title: "Charts",
  },
  {
    id:11,
    name: "item",
    title: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    to: "/bar"
  },
  {
    id:12,
    name: "item",
    title: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    to: "/pie"
  },
  {
    id:13,
    name: "item",
    title: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    to: "/line"
  },
  {
    id:14,
    name: "item",
    title: "Geography Chart",
    icon: <MapOutlinedIcon />,
    to: "/geography"
  },
];


// header---
export const headerConstants = {
  "/bar": {
    title: "Bar Chart",
    subtitle: "Bar chart page for more Sales Quantity details"
  },
  "/calendar": {
    title: "Calendar",
    subtitle: "welcome to fullCalendar interactive page"
  },
  "/contacts": {
    title: "Contacts Information",
    subtitle: "list of Contacts for Future Reference"
  },
  "/": {
    title: "Dashboard",
    subtitle: "welcome to your dashboard"
  },
  "/faq": {
    title: "FAQ",
    subtitle: "welcome to Frequently Asked Questions Page"
  },
  "/form": {
    title: "Profile Form",
    subtitle: "You can create new User"
  },
  "/geography": {
    title: "Geography Chart",
    subtitle: "Geography Chart page for Geography Based Traffic details"
  },
  "/invoices": {
    title: "Invoices Balances",
    subtitle: "more information about Invoices balances list"
  },
  "/line": {
    title: "Line Chart",
    subtitle: "Line Chart page for more Revenue Generated details"
  },
  "/pie": {
    title: "Pie Chart",
    subtitle: "Pi Chart page for more details"
  },
  "/team": {
    title: "Manage Team",
    subtitle: "You can manage the Team Members"
  },
}

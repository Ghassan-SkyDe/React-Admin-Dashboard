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
    to: "/pie"
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
]
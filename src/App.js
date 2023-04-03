import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import SidebarNav from "./scenes/global/SidebarNav";
import {
  Bar,
  Calendar,
  Contacts,
  Dashboard,
  FAQ,
  Form,
  Geography,
  Invoices,
  Line,
  P404,
  Pie,
  Team
} from "./scenes"
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
          <SidebarNav/>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/bar" element={<Bar/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/" element={<Dashboard/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/geography" element={<Geography/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="*" element={<P404/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/team" element={<Team/>} />
            </Routes>
          </main>
        </div>
     </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

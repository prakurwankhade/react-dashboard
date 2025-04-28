import { Box, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Setting";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Info from "./pages/Info";


const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 , height:900}}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/info" element={<Info/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
    
  );
};

export default App;

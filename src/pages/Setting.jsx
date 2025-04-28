import {
  Box,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  Paper,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useThemeMode } from "../context/ThemeContext";

const Settings = () => {
  const { mode, toggleMode } = useThemeMode();
  const [notifications, setNotifications] = useState(true);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    
    alert("Settings saved!");
  };

  return (
    <Box>
      <Typography variant="h4" mb={4}>
        Settings
      </Typography>

      <Grid container spacing={4}>
        {/* Profile Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" mb={2}>
              Profile Information
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button variant="contained" onClick={handleSave}>
              Save Profile
            </Button>
          </Paper>
        </Grid>

        {/* Preferences */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" mb={2}>
              Preferences
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={mode === "dark"}
                  onChange={toggleMode}
                />
              }
              label="Enable Dark Mode"
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
              }
              label="Enable Notifications"
              sx={{ mb: 3 }}
            />
            <Divider sx={{ my: 2 }} />
            <Button variant="contained" color="secondary" onClick={handleSave}>
              Save Preferences
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;

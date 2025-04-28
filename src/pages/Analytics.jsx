import { Grid, Paper, Typography, Box } from "@mui/material";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

const Analytics = () => {
  return (
    <div className="bg-warning d-flex justify-content-center p-5">
      <Typography variant="h4" mb={4}>
        Analytics Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              User Signups (Monthly)
            </Typography>
            <BarChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Traffic Sources
            </Typography>
            <DoughnutChart />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Summary
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={4}>
              <Box>
                <Typography variant="subtitle1">Total Users:</Typography>
                <Typography variant="h6">12,500</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">Conversion Rate:</Typography>
                <Typography variant="h6">4.2%</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">Bounce Rate:</Typography>
                <Typography variant="h6">38%</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">Avg. Session Time:</Typography>
                <Typography variant="h6">3m 45s</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;

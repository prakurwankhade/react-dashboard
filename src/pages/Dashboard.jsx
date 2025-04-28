import { Grid, Typography, Paper } from "@mui/material";
import StatCard from "../components/card";
import LineChart from "../components/Linechart";

const Dashboard = () => {
  return (
    <div className="bg-success w-100 h-100 p-5  " style={
      {
        height:'1000px'
      }
    }>
      <Typography variant="h4" mb={4}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={7} className="d-flex w-100 justify-content-evenly" style={
          {
            width:200
          }
          }>
        <Grid item xs={12} sm={6} md={4} className="mt-4 w-25 text-center"> 
          <StatCard title="Users" value="1,240" color="#1976d2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="mt-4 w-25 text-center">
          <StatCard title="Revenue" value="$52,300" color="#2e7d32" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="mt-4 w-25 text-center ">
          <StatCard title="Orders" value="320" color="#d32f2f" />
        </Grid>

        <Grid item xs={12} className="w-50">
          <Paper sx={{ p: 5, mt: 4 }}>
            <Typography variant="h6" mb={2}>
              Monthly Revenue
            </Typography>
            <LineChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

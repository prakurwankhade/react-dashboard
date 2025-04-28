import {
  Box,
  Paper,
  Typography,
  Chip,
  Stack,
  Button,
  Grid,
} from "@mui/material";

const reports = [
  { id: 1, title: "System Downtime", status: "Open", date: "2025-04-06" },
  { id: 2, title: "Login Bug", status: "In Progress", date: "2025-04-05" },
  { id: 3, title: "UI Issue on Mobile", status: "Resolved", date: "2025-04-04" },
];

const getColor = (status) => {
  switch (status) {
    case "Open":
      return "error";
    case "In Progress":
      return "warning";
    case "Resolved":
      return "success";
    default:
      return "default";
  }
};

const Reports = () => {
  return (
    <div>
      <Typography variant="h4" mb={4}>
        Reports
      </Typography>

      <Stack spacing={3}>
        {reports.map((report) => (
          <Paper key={report.id} sx={{ p: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography variant="h6">{report.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Submitted on: {report.date}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Chip label={report.status} color={getColor(report.status)} />
                  <Button size="small" variant="outlined">
                    View
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Stack>
    </div>
  );
};

export default Reports;

import { Paper, Typography } from "@mui/material";

const Card = ({ title, value, color }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        backgroundColor: color || "primary.main",
        color: "#fff",
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.44)",
        },
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h4" fontWeight="bold">
        {value}
      </Typography>
    </Paper>
  );
};

export default Card;

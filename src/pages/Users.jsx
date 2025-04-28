import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@mail.com", role: "Editor" },
  { id: 3, name: "Clara Lee", email: "clara@mail.com", role: "Viewer" },
];

const Users = () => {
  return (
    <div>
      <Typography variant="h4" mb={4}>
        User Management
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Role</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;

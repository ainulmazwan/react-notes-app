import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function EditNotePage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: "60px",
      }}
    >
      <Typography variant="h4">Manage Categories</Typography>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          mt: "20px",
        }}
      >
        <Typography variant="body1" sx={{ mb: "10px" }}>
          Add New Category
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <TextField
            fullWidth
            id="note_title"
            label="Category Name"
            variant="outlined"
          />
          <Button color="primary" variant="contained">
            ADD
          </Button>
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          mt: "20px",
        }}
      >
        <Typography variant="body1" sx={{ mb: "10px" }}>
          Existing Categories (3)
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Personal" />
            <Button color="light">
              <EditIcon />
            </Button>
            <Button color="light">
              <DeleteIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Work" />
            <Button color="light">
              <EditIcon />
            </Button>
            <Button disabled>
              <DeleteIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Ideas" />
            <Button color="light">
              <EditIcon />
            </Button>
            <Button disabled>
              <DeleteIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
        </List>
      </Paper>
    </Container>
  );
}

export default EditNotePage;

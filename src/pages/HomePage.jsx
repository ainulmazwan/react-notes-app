import { Container, Box, Typography, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Edit, Delete } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function HomePage() {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">All Notes (3)</Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Category"
                  // onChange={handleChange}
                >
                  <MenuItem value={"all"}>All Categories</MenuItem>
                  <MenuItem value={"personal"}>Personal</MenuItem>
                  <MenuItem value={"work"}>Work</MenuItem>
                  <MenuItem value={"idea"}>Idea</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Sort By"
                  // onChange={handleChange}
                >
                  <MenuItem value={"updated"}>Last Updated</MenuItem>
                  <MenuItem value={"title"}>Title</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Which Theme should we pick?
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {new Date().toISOString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Edit fontSize="16px" sx={{ mr: 1 }} />
                  Edit
                </Button>
                <Button size="small" color="error">
                  <Delete fontSize="16px" sx={{ mr: 1 }} />
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Which Theme should we pick?
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {new Date().toISOString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Edit fontSize="16px" sx={{ mr: 1 }} />
                  Edit
                </Button>
                <Button size="small" color="error">
                  <Delete fontSize="16px" sx={{ mr: 1 }} />
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Which Theme should we pick?
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {new Date().toISOString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Edit fontSize="16px" sx={{ mr: 1 }} />
                  Edit
                </Button>
                <Button size="small" color="error">
                  <Delete fontSize="16px" sx={{ mr: 1 }} />
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", right: "30px" }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default HomePage;

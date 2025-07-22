import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function HomePage() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          py: "60px",
          minHeight: "80vh",
          width: "100vw",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px !important",
          }}
        >
          <Typography variant="h4">All Notes (3)</Typography>
          <Box sx={{}}>
            <FormControl size="small" sx={{ minWidth: "150px", mx: "10px" }}>
              <InputLabel>Category</InputLabel>
              <Select label="Category">
                <MenuItem value={"All Categories"}>All Categories</MenuItem>
                <MenuItem value={"Personal"}>Personal</MenuItem>
                <MenuItem value={"Work"}>Work</MenuItem>
                <MenuItem value={"Idea"}>Idea</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: "150px" }}>
              <InputLabel>Sort By</InputLabel>
              <Select label="SortBy">
                <MenuItem value={"Last Updated"}>Last Updated</MenuItem>
                <MenuItem value={"Title"}>Title</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Container>
        <Grid container spacing={2} sx={{ my: "30px" }}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Which theme to pick?
                </Typography>
                <Chip size="small" label="Ideas" sx={{ my: "10px" }} />
                <Typography component="div" color="gray" variant="caption">
                  Jul 20, 2025 6:58 PM
                </Typography>
                <Button color="primary">
                  <EditIcon />
                  EDIT
                </Button>
                <Button color="error">
                  <DeleteIcon />
                  DELETE
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card
              sx={{
                minWidth: 275,
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  Project making week
                </Typography>
                <Chip size="small" label="Personal" sx={{ my: "10px" }} />
                <Typography component="div" color="gray" variant="caption">
                  Jul 20, 2025 6:58 PM
                </Typography>
                <Button color="primary">
                  <EditIcon />
                  EDIT
                </Button>
                <Button color="error">
                  <DeleteIcon />
                  DELETE
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Assignment sheets
                </Typography>
                <Chip size="small" label="Work" sx={{ my: "10px" }} />
                <Typography component="div" color="gray" variant="caption">
                  Jul 20, 2025 6:57 PM
                </Typography>
                <Button color="primary">
                  <EditIcon />
                  EDIT
                </Button>
                <Button color="error">
                  <DeleteIcon />
                  DELETE
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: "20px", right: "20px" }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default HomePage;

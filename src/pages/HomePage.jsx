import { useState } from "react";
import { toast } from "sonner";
import { Link as RouterLink } from "react-router";
import { Container, Box, Typography, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Edit, Delete } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function HomePage() {
  // 1. load all the notes from the local storage
  const notesInLocalStorage = localStorage.getItem("notes");
  // 2. set the local storage data into notes state
  const [notes, setNotes] = useState(
    notesInLocalStorage ? JSON.parse(notesInLocalStorage) : []
  );
  // 13. load all the categories from the local storage
  const categoriesInLocalStorage = localStorage.getItem("categories");
  // 14. set the categories data from local storage to the categories state
  const [categories, setCategories] = useState(
    categoriesInLocalStorage ? JSON.parse(categoriesInLocalStorage) : []
  );
  // 16. create a selectedCategory state
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("updated");

  const handleNoteDelete = (note) => {
    // 8. do a confirmation alert
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    // 9. use filter and remove the note from the notes state
    if (confirmDelete) {
      const updatedNotes = notes.filter((item) => item.id !== note.id);
      // 10. update the state with updatedNotes
      setNotes(updatedNotes);
      // 11. update local storage with the updatedNotes
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      // 12. show success notification
      toast("Note has been deleted");
    }
  };

  const getCategoryLabel = (note) => {
    // find the selected category from the local storage data based on the category id in the note
    const selectedCategory = categories.find((c) => c.id === note.category);
    if (selectedCategory) {
      return selectedCategory.label;
    } else {
      return "No category";
    }
  };

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
          {/* 7. render the length of the notes */}
          <Typography variant="h4">All Notes ({notes.length})</Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // 17. assign the selectedCategory state and onChange
                  value={selectedCategory}
                  label="Category"
                  onChange={(event) => setSelectedCategory(event.target.value)}
                >
                  <MenuItem value={"all"}>All Categories</MenuItem>
                  {/* 15. use .map to render all the categories */}
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortBy}
                  label="Sort By"
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <MenuItem value={"updated"}>Last Updated</MenuItem>
                  <MenuItem value={"title"}>Title</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {/* 3. use .map() to render the notes */}
          {notes
            .filter((n) => {
              if (selectedCategory === "all") {
                return true;
              }
              if (n.category === selectedCategory) {
                return true;
              }
              return false;
            })
            .sort((a, b) => {
              if (sortBy === "updated") {
                return b.updatedAt - a.updatedAt;
              } else {
                return a.title.localeCompare();
              }
            })
            .map((note) => (
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                <Card sx={{ width: "100%" }}>
                  <CardContent>
                    {/* 4. render the note title */}
                    <Typography gutterBottom variant="h5" component="div">
                      {note.title}
                    </Typography>
                    <Chip
                      size="small"
                      label={getCategoryLabel(note)}
                      sx={{ mb: "20px" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {new Date(note.updatedAt).toLocaleString()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* 5. go to edit page */}
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/n/${note.id}`}
                    >
                      <Edit fontSize="16px" sx={{ mr: 1 }} />
                      Edit
                    </Button>
                    {/* 6. attach an onClick event handling for delete */}
                    <Button
                      size="small"
                      color="error"
                      onClick={() => {
                        handleNoteDelete(note);
                      }}
                    >
                      <Delete fontSize="16px" sx={{ mr: 1 }} />
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
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

import { useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";
import { toast } from "sonner";

function EditNotePage() {
  // setup useNavigate
  const navigate = useNavigate();
  // get id from url params
  const { id } = useParams();
  // 1. load the categories data from local storage
  const dataInLocalStorage = localStorage.getItem("categories");
  // 2. create a state to store the categories data from local storage
  const [categories, setCategories] = useState(
    dataInLocalStorage ? JSON.parse(dataInLocalStorage) : []
  );
  // 3. load the notes data from local storage
  const notesLocalStorage = localStorage.getItem("notes");
  // 4. create a state to store the notes data from local storage
  const [notes, setNotes] = useState(
    notesLocalStorage ? JSON.parse(notesLocalStorage) : []
  );
  // loading the existing data from the notes
  const selectedNote = notes.find((n) => n.id === id);
  // use the selectedNote to populate the existing data into state
  const [title, setTitle] = useState(selectedNote ? selectedNote.title : "");
  const [category, setCategory] = useState(
    selectedNote ? selectedNote.category : ""
  );
  const [content, setContent] = useState(
    selectedNote ? selectedNote.content : "Welcome to <b>Forward College</b>"
  );

  const handleUpdate = () => {
    // check for error - make sure all the fields are fill up
    // update the new note data into the notes state
    if (title === "" || content === "" || category === "") {
      toast("Please fill in the all the fields");
    } else {
      const updatedNotes = [...notes];
      setNotes(
        updatedNotes.map((note) => {
          if (note.id === id) {
            note.title = title;
            note.content = content;
            note.category = category;
          }
          return note;
        })
      );

      // update the notes in local storage
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      // show success message
      toast("Note has been updated");
      // redirect back to home page
      navigate("/");
    }
  };

  // if selectedNote is undefined, return a not found message
  if (!selectedNote) {
    return <div>Note not found.</div>;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        py: "60px",
      }}
    >
      <Typography variant="h3">Edit Note</Typography>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          mt: "20px",
        }}
      >
        <TextField
          fullWidth
          id="note_title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <FormControl fullWidth sx={{ mt: "20px" }}>
          <InputLabel id="note_category_label">Category</InputLabel>
          <Select
            labelId="note_category_label"
            id="note_category"
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ mt: "20px" }}>
          <Typography variant="body1" sx={{ mb: "10px" }}>
            Content
          </Typography>
          <Editor
            containerProps={{ style: { height: "400px" } }}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Button color="primary" variant="contained" onClick={handleUpdate}>
            Save Note
          </Button>
          <Button component={RouterLink} to="/" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default EditNotePage;

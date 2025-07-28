import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";
import { nanoid } from "nanoid";
import { toast } from "sonner";

/*
   notes structure:
  [
     {
         id: "denfne8j3m_ud83", // nanoid
         title: "New note",
         category: "nmrj_kj7743", // category id from categories
         content: "vanakam to <b>forward college</b>",
         updatedAt: 1736489494585 (timestamp) 
      }
  ]
*/

function AddNewPage() {
  // setup useNavigate
  const navigate = useNavigate();
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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("Welcome to <b>Forward College</b>");

  const handleAddNew = () => {
    // 6. check for error - make sure all the fields are fill up
    if (title === "" || content === "" || category === "") {
      toast("Please fill in the all the fields");
    } else {
      // 7. add the new note data into the notes state
      const updatedNotes = [
        ...notes,
        {
          id: nanoid(),
          title: title,
          content: content,
          category: category,
          updatedAt: new Date().valueOf(), // timestamp - seconds count since 1970 jan 1
        },
      ];
      // // 8. update the notes in local storage
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      // 9. show success message
      toast("New note added");
      // 10. redirect back to home page
      navigate("/");
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: "60px",
      }}
    >
      <Typography variant="h3">Add New Note</Typography>
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
            onChange={(event) => setCategory(event.target.value)}
          >
            {/* 5. load the categories using .map - value pass in as category.id */}
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
          <Button color="primary" variant="contained" onClick={handleAddNew}>
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

export default AddNewPage;

import { useState } from "react";
import { Link as RouterLink } from "react-router";
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
  [
    {
      id: ""// nanoid
      title: "New Note"
      category: "hdahr09" //nanoid from category
      content: "This is my note"
    },
    {
      id: ""// nanoid
      title: "New Note 2"
      category: "h52gahr09" //nanoid from category
      content: "This is my note 2"
    }
  ]
*/

function AddNewPage() {
  // 1 load categories
  const categoriesInLocalStorage = localStorage.getItem("categories");
  // 2. create a state to store the categories data from local storage
  const [categories, setCategories] = useState(
    categoriesInLocalStorage ? JSON.parse(categoriesInLocalStorage) : []
  );
  //3 load the notes data from local storage
  const notesInLocalStorage = localStorage.getItem("notes");
  //4 create a state to store the notes data from local storage
  const [notes, setNotes] = useState(
    notesInLocalStorage ? JSON.parse(notesInLocalStorage) : []
  );

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("Welcome to <b>Forward College</b>");

  const handleAddNew = () => {
    // 6. check for error
    if (title === "" || content === "" || category === "") {
      toast("Please fill in all the fields");
    } else {
      // 4b. add the new note to the state
      const updatedNotes = [
        ...notes,
        {
          id: nanoid(),
          title: title,
          category: category,
          content: content,
          updatedAt: new Date().valueOf() // timestamp - seconds count since 1970 jan 1
        },
      ];
      // 7. add the new note data into the notes state
      setNotes(updatedNotes);
      // show notification of success message
      toast("New Category has been added");
      // reset the field
      setTitle("");
      setCategory("");
      setContent("");
      // 4c. update the local storage with the updated categories
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    // 8. update the notes in local storage
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  function onChange(e) {
    setContent(e.target.value);
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        py: "60px",
      }}
    >
      <Typography variant="h4">Add New Note</Typography>
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
            {/* 3. load categories using .map , value pass in as category id*/}
            {categories.map((category) => (
              <MenuItem value={category.id}>{category.label}</MenuItem>
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
            onChange={onChange}
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

import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/AppBar";

// import all the pages
import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import CategoriesPage from "./pages/CategoriesPage";
import EditNotePage from "./pages/EditNotePage";

/*
  Routes:
  All notes => /
  Add note => /add
  Categories => /categories
*/

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNewPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/n/1" element={<EditNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;

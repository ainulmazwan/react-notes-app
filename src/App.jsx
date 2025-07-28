import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/AppBar";
import { Toaster } from "sonner";

// import all the pages
import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import EditNotePage from "./pages/EditNotePage";
import CategoriesPage from "./pages/CategoriesPage";

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
        <Route path="/n/:id" element={<EditNotePage />} />
      </Routes>
      <Toaster position="top-right" theme="dark" />
    </Router>
  );
}

export default App;

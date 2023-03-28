import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<ListPage />} />
          <Route path="/blogs/create" element={<CreatePage />} />
          <Route path="/blogs/edit" element={<EditPage />} />
          <Route path="/blogs/:id" element={<ShowPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogPost from "./components/BlogPost";





function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/blogs" element={<BlogPost />} />

        </Routes>
        </div>
    </BrowserRouter>
  );
}

 
export default App;

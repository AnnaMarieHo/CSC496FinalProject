import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Pokemon from "./Pokemon";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
        {/* <Home /> */}
        {/* <Search /> */}
      </div>
    </>
  );
}

export default App;

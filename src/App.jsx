import Navbar from "./components/Navbar";
import "./App.css";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

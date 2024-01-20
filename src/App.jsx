import Navbar from "./components/Navbar";
import "./App.css";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

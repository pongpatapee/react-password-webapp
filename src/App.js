import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CutePasswordGenerator from "./CutePasswordGenerator";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CutePasswordGenerator" element={<CutePasswordGenerator />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

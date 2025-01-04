import { Route, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Mainpage from "./Mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import "./index.css";
import Homepage from "./webpages/Home"
import SelectedAgent from "./webpages/SelectedAgent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/:uuid" element={<SelectedAgent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

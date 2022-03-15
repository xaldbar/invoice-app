import './App.css';
import HomePage from "./pages/Home/HomePage";
import {Route, Routes} from "react-router-dom";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/invoices/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;

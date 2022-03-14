import './App.css';
import * as api from './api'
import {useEffect, useState} from "react";
import HomePage from "./Pages/Home/HomePage";
import {Route, Routes} from "react-router-dom";
import InvoicePage from "./Pages/InvoicePage/InvoicePage";

function App() {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    api.client.get(api.allInvoices)
        .then(({data}) => setInvoices(data))
        .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/invoices/:id" element={<InvoicePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

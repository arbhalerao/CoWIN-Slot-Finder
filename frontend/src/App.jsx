import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import States from "./pages/States";
import Districts from "./pages/Districts";
import Centers from "./pages/Centers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<States />} />
          <Route path="/districts/:stateId" element={<Districts />} />
          <Route path="/centers/:districtId" element={<Centers />} />
          <Route path="/pincode" element={<Centers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

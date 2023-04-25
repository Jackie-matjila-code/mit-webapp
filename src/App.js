import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import Home from "./Views/Home";
import Decision from "./Views/Decision";
import DrinkModel from "./Views/DrinkModel";
import ModelDetails from "./Views/ModelDetails";
import ModelEdit from "./Views/ModelEdit";
import ModelCreate from "./Views/ModelCreate";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/drink" element={<DrinkModel />}></Route>
          <Route path="/decision" element={<Decision />}></Route>
          <Route path="/model/create" element={<ModelCreate />}></Route>
          <Route path="/model/edit/:id" element={<ModelEdit />}></Route>
          <Route path="/model/details/:id" element={<ModelDetails />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

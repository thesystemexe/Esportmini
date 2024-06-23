import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TournamentPage from "./Tournament";
import TourForm from "./Tourform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Tournament" element={<TournamentPage />}></Route>
          <Route path="/addtour" element={<TourForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavbarComp from "./components/Navbar/NavbarComp";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ListerPage from "./pages/ListerPage/ListerPage";
import { CharacterContext } from "./Context/context";
import Footer from "./components/Footer/Footer";
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Router>
        <CharacterContext.Provider value={{ searchTerm, setSearchTerm }}>
          <Routes>
            <Route path="/" element={<NavbarComp childComp={<HomePage />} />} />
            <Route
              path="/characters"
              element={<NavbarComp childComp={<ListerPage />} />}
            />
            <Route
              path="/character-info"
              element={<NavbarComp childComp={<DetailsPage />} />}
            />
          </Routes>
          <Footer />
        </CharacterContext.Provider>
      </Router>
    </div>
  );
};

export default App;

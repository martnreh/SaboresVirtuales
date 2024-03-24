import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Favorites from "./Pages/Favorites";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/favorites" element={<Favorites/>} />
    </Routes>
  );
}

export default App;

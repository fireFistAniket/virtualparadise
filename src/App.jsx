import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Artworks from "./pages/Artworks";
import Companies from "./pages/Companies";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/events" Component={Events} />
        <Route path="/artworks" Component={Artworks} />
        <Route path="/companies" Component={Companies} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

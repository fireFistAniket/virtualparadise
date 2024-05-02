import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Artworks from "./pages/Artworks";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/events' Component={Events} />
        <Route path='/artworks' Component={Artworks} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

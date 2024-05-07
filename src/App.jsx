import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Artworks from "./pages/Artworks";
import Companies from "./pages/Companies";
import EventDetails from "./pages/EventDetails";
import CompanyDetails from "./pages/CompanyDetails";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import Franchise from "./pages/Franchise";
import Characters from "./pages/Characters";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' Component={Home} />
        <Route path='/events' Component={Events} />
        <Route path='/artworks' Component={Artworks} />
        <Route path='/companies' Component={Companies} />
        <Route path='/events/:eventId' Component={EventDetails} />
        <Route path='/companies/:companyId' Component={CompanyDetails} />
        <Route path='/games' Component={Games} />
        <Route path='/games/:gameId' Component={GameDetails} />
        <Route path='/franchise' Component={Franchise} />
        <Route path='/characters' Component={Characters} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

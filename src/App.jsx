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
import Genres from "./pages/Genres";
import Not_Found from "./pages/Not_Found";
import SearchResults from "./pages/SearchResults";
import { useEffect } from "react";
import { pwaTrackingListeners } from "./utils/pwaEventListeners";

function App() {
  const isBrowser = typeof window !== "undefined";
  useEffect(() => {
    if (isBrowser) {
      pwaTrackingListeners();
    }

    if (isBrowser && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/serviceWorker.js")
          .then(() => {
            console.log("Service worker registered");
          })
          .catch((err) => {
            console.log("Service worker registration failed", err);
          });
      });
    }
  }, [isBrowser]);

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
        <Route path='/genres' Component={Genres} />
        <Route path='/search' Component={SearchResults} />
        <Route path='*' Component={Not_Found} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

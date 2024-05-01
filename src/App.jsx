import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Footer from "./components/Footer";

function App() {
  // useEffect(() => {
  //   fetch("/api/games", {
  //     method: "POST",
  //     headers: { "Content-Type": "text/plain" },
  //     body: "fields *; limit 12;",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/events' Component={Events} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
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
      </Routes>
    </>
  );
}

export default App;

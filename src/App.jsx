import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Video from "./components/pages/Video";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Video />} />
          <Route path="/videos/add" element={<Add />} />
          <Route path="/videos/edit/:videoId" element={<Edit />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

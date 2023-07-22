import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Video />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

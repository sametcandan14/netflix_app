import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>SPAs, Page Routes and React Router Workshop</h1>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

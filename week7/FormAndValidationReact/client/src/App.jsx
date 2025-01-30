import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Form } from "./Components/Form";
import { MultipleInputForm } from "./Components/MultipleInputForm";
import Section from "./Components/Section";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <h1>React: Forms and Validation</h1>

      <div className="main">
        <Section />

        <Routes>
          <Route element={<Form />} path={"/Form1"} />
          <Route element={<MultipleInputForm />} path={"/Form2"} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

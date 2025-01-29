import "./App.css";
import Header from "./Components/Header";
import { Form } from "./Components/Form";
import { MultipleInputForm } from "./Components/MultipleInputForm";

export default function App() {
  return (
    <>
      <Header />
      <h1>React: Forms and Validation</h1>

      <h4>Handling “controlled” form input fields</h4>
      <Form />

      <h4>Handling multiple form fields</h4>
      <MultipleInputForm />
    </>
  );
}

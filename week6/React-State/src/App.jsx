import "./App.css";
import Button from "./components/Button";
import DecreaseButton from "./components/DecreaseButton";

export default function App() {
  return (
    <>
      <h1>The useState Hook Workshop</h1>

      <h4>Buttons below one increases count & other resets when clicked</h4>
      <Button />
      <h4>Button below decreases count when clicked</h4>
      <DecreaseButton />
    </>
  );
}

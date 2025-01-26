import Button from "./components/Button";
import ButtonInline from "./components/ButtonInline";
import TextButton from "./components/TextButton";
import ReusableButton from "./components/ReusableButton";
import "./App.css";

export default function App() {
  function handleFirstClick() {
    console.log("You clicked on the first button");
  }
  function handleSecondClick() {
    console.log("You clicked on the second button");
  }
  function handleThirdClick() {
    console.log("You clicked on the third button");
  }
  return (
    <>
      <h3>Below Button handles count</h3>
      <Button />
      <h3>Below button shows message in console</h3>
      <ButtonInline />
      <h3>Below button displays new message when clicked </h3>
      <TextButton />
      <h3>
        Below is a reusable button that display different message in console
      </h3>
      <ReusableButton eventHandler={handleFirstClick} />
      <ReusableButton eventHandler={handleSecondClick} />
      <ReusableButton eventHandler={handleThirdClick} />
    </>
  );
}

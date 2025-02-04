//Passing arguments to event handlers
export default function ReusableButton(props) {
  console.log(props);
  return (
    <>
      <div>
        <button onClick={props.eventHandler}>Reuse me!</button>
      </div>
    </>
  );
}

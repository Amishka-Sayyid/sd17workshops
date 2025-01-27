//Create a component that displays a simple list of items on the page.

export default function Section(props) {
  return (
    <>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </>
  );
}

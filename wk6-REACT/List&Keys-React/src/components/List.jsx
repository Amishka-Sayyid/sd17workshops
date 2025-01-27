//Rendering lists of items
export default function List() {
  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((number) => number * 2);

  console.log(doubledNumbers);

  const items = ["Item 1", "Item 2", "Item 3"];
  const htmlItems = items.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h4>Rendering lists of items</h4>
      <ul>{doubledNumbers}</ul>
      <ul>{htmlItems}</ul>
    </>
  );
}

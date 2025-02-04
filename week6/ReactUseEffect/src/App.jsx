import Section from "./components/Section";
import "./App.css";
import { data } from "./lib/data";
import Items from "./components/Items";

export default function App() {
  return (
    <>
      <h1>The useEffect Hook and Fetching data Workshop</h1>
      <h2>Displaying a simple list of items using list and keys</h2>
      {data.map((dataItem) => {
        return (
          <Section
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}

      <h2>Using useEffect</h2>
      <Items />
    </>
  );
}

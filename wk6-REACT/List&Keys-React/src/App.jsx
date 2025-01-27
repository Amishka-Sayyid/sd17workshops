import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import List from "./components/List";
import { data } from "./lib/data";

export default function App() {
  return (
    <>
      <Header />

      {data.map((singleData) => {
        return (
          <Section
            key={singleData.id}
            title={singleData.title}
            content={singleData.content}
          />
        );
      })}

      <List />
      <Footer />
    </>
  );
}

// import { useState } from "react";
import Button from "./components/Button";
import Ternary from "./components/Ternary";
import Header from "./components/Header";
import Section from "./components/Section";
import { data } from "./library/data";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1> Conditional Rendering Workshop</h1>
      <h4>Using && operator</h4>
      <Button />
      <h4>Using ternary operator</h4>
      <Ternary />

      <h4>Click on Title for content to appear</h4>
      {data.map(function (dataItem) {
        return (
          <Section
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Section subTitle="RECENT LAUNCH" title="SHIPFLIGHT VIDEO" />
      <Section subTitle="Buy tickets" title="You can go to space!" />
      <Section
        subTitle="space travel deals"
        title="You might not have to sell a kidney!"
      />
      <Footer />
    </>
  );
}

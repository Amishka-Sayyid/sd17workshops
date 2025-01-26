import Button from "./Button";
import "./Section.css";
export default function Section(props) {
  return (
    <>
      <section className="section">
        <div className="text">
          <h2>{props.subTitle}</h2>
          <h1>{props.title}</h1>
          <Button />
        </div>
      </section>
    </>
  );
}

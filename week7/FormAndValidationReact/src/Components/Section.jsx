import { Link } from "react-router-dom";

export default function Section() {
  return (
    <>
      <h4>Click on links below for suprise!!!</h4>
      <div className="links">
        <Link to={"/"} className="singleLink">
          Home
        </Link>
        <Link to={"/Form1"} className="singleLink">
          SingleInputForm
        </Link>
        <Link to={"/Form2"} className="singleLink">
          MultipleInputForm
        </Link>
      </div>
    </>
  );
}

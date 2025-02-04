import { useState } from "react";
export default function Section(props) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <h2
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {props.title}
      </h2>
      {showContent ? <p>{props.content}</p> : null}
    </>
  );
}

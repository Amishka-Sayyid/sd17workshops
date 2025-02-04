//Defining event handlers inline
export default function ButtonInline() {
  return (
    <>
      <div>
        <button
          onClick={() => {
            console.log("Clicked button!");
          }}
        >
          Click Me!
        </button>
      </div>
    </>
  );
}

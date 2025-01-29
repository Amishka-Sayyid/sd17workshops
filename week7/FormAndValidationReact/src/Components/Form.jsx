//Handling “controlled” form input fields
//“Controlled” input fields are input fields which are connected directly to a state value in React.
import { useState } from "react";

export function Form() {
  const [username, setUserName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  // handle form input field value being changed by user
  function handleInputChange(event) {
    setUserName(event.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Write your username"
            required
            // connect the handler to the onChange event
            onChange={handleInputChange}
            value={username}
          />
          <br />

          <p>Current value is: {username}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

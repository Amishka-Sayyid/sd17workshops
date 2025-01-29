//Handling multiple form fields
//Form.jsx handles one input however that process if used on multiple inputs u will need to make  a new function and state value for each of the fields that is tedious hence the below steps is the best to use when having multiple inputs.

import { useState } from "react";

export function MultipleInputForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({
      // the spread operator will add all existing values
      ...formValues,
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Write your username"
        required
        //
        value={formValues.username}
        onChange={handleInputChange}
      />
      <br />
      <p>Current value is: {formValues.username}</p>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Write your email"
        required
        //
        value={formValues.email}
        onChange={handleInputChange}
      />
      <br />

      <p>Current value is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

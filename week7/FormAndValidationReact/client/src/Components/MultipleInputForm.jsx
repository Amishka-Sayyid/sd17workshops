//Handling multiple form fields
//Form.jsx handles one input however that process if used on multiple inputs u will need to make  a new function and state value for each of the fields that is tedious hence the below steps is the best to use when having multiple inputs.
import "/src/App.css";
import { useState, useEffect } from "react";

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

    fetch("http://localhost:8080/new-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
    console.log(formValues);
  }

  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/messages");
        const data = await response.json();
        console.log("data fetched successfully!");

        setItems(data);
      } catch {
        console.log(" Failed to fetch items!");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section>
        <h6>Handling multiple form fields</h6>
        <div>
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

            <div className="ptags">
              <p>Current value is: {formValues.username}</p>
              <p>Current value is: {formValues.email}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="datadiv">
          <h6>data fetched:</h6>

          {items.length === 0 ? (
            <p>loading data ...</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="data">
                <p>{item.username}</p>
                <p>{item.email}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

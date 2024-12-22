const form = document.querySelector("form");

// Saving data to Local Storage
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const formObject = new FormData(form);
//   const formData = formObject.get("colour");

//   localStorage.setItem("colour", formData);

//   alert("data was sent successfully");
// }

// // Retrieving data from Local Storage
// const formData = localStorage.getItem("colour");

// if (formData) {
//   const input = document.querySelector("input");
//   input.value = formData;
// }

// JSON

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");
  const fruit = formData.get("fruit");

  // preferences is now an object, it might contain other preferences...
  const preferences = {
    colour,
    fruit,
  };

  // so when we save it, we stringify it
  localStorage.setItem("preferences", JSON.stringify(preferences));
  alert("data sent successfully");
}

form.addEventListener("submit", savePreferences);
// Retrieving data from Local Storage
// then we parse the string back into an object when we retrieve it
const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const colourinput = document.querySelector("input[name='colour']");
  const fruitinput = document.querySelector("input[name='fruit']");

  if (colourinput) colourinput.value = preferences.colour;
  if (fruitinput) fruitinput.value = preferences.fruit;
}
// Applying preferences
function loadPreferences() {
  // load the prefs
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  // if we have some prefs
  if (preferences) {
    // set the form value
    const colourinput = document.querySelector("input[name='colour']");
    if (colourinput) {
      colourinput.value = preferences.colour || "purple";
    } // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved
    const body = document.querySelector("body");
    if (body) {
      body.style.color = preferences.colour || "purple"; // Default to purple if no preference is found
    }
  } else {
    console.log("No preferences found in localStorage.");
  }
}

// //clearing local storage
// function clearcolour(event) {
//   event.preventDefault();

//   localStorage.removeItem("colour");
// }
// Function to handle changes in local storage
function handleLocalStorageChange(event) {
  if (event.key === "favouriteColour") {
    // Do something when the specific local storage key changes
    const newValue = event.newValue;
    console.log(`Local storage favouriteColour changed to: ${newValue}`);
  }
}

// Add an event listener to listen for changes in local storage
window.addEventListener("storage", handleLocalStorageChange);

const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  const formValuesFromInput = Object.fromEntries(formData);
  console.log(formValuesFromInput);
  alert("Data was sent successfully!");
}

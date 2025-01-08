//workshop
//fetch api

const getFoxImage = async () => {
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);

  const data = await response.json();

  const wrangledData = data.image;

  return wrangledData;
};

const imageContainer = document.getElementById("foxApi");

const CreateImage = (foxUrl) => {
  const newImage = document.createElement("img");

  newImage.src = foxUrl;
  newImage.alt = "random fox images";
  newImage.className = "foxImage";

  imageContainer.appendChild(newImage);
};

async function display() {
  const finalImage = await getFoxImage();
  CreateImage(finalImage);
}
display();

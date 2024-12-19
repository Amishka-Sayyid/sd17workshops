console.log("test");

async function getPic() {
  //fetch is a method whose argument is the location of the data .
  const response = await fetch("https://randomfox.ca/floof/");
  console.log("HTTP Response:", response);

  //translate(parsing) data into json
  const data = await response.json();
  console.log("JSON Data:", data);

  //filter data (data wrangling)
  const wrangledData = data.image;
  console.log(wrangledData);

  //If you want to use this value outisde the function
  return wrangledData;
}

const imageContainer = document.getElementById("imageContainer");

function createPic(foxUrl) {
  const Pic = document.createElement("img");
  Pic.src = foxUrl;
  Pic.alt = "random images";
  Pic.className = "pic-img";

  imageContainer.appendChild(Pic);
}

//I want to combine our data from the API with the image that you are creating

async function displayImageWithAPISrc() {
  const getPicData = await getPic();
  createPic(getPicData);
}

displayImageWithAPISrc();
displayImageWithAPISrc();
displayImageWithAPISrc();

//image2
//fetch

async function getImage() {
  //  API i'm fetching from (https://random.dog) provides a direct image URL ill just need to pass it directly
  return "https://random.dog/ec18751d-0c52-4dc9-a338-42a30017cc21.jpg";
}

//create element and append to container

const newImageContainer = document.getElementById("image2");

function createNewImage(imageUrl) {
  const newImage = document.createElement("img");
  newImage.src = imageUrl;
  newImage.alt = "random photos";
  newImage.className = "newImages";

  newImageContainer.appendChild(newImage);
}

//combine
async function display() {
  const images = await getImage();
  createNewImage(images);
}

display();

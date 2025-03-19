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

// https://cookie-upgrade-api.vercel.app/api/upgrades

// tring to fetch and render the the above in table format.

async function getDetails() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );

  const data = await result.json();

  const wrangledCookie = data;

  return wrangledCookie;
}

const cookie = document.getElementById("cookie");

function createTable(cookieData) {
  // creating the table
  const table = document.createElement("table");

  // create head for the table
  let head = document.createElement("thead");

  // create heading cells $ Insert data to cells

  let h1 = document.createElement("th");
  h1.innerText = "id";
  let h2 = document.createElement("th");
  h2.innerText = "name";
  let h3 = document.createElement("th");
  h3.innerText = "cost";
  let h4 = document.createElement("th");
  h4.innerText = "increase";

  cookieData.forEach((single) => {
    // creating the row element
    let row = document.createElement("tr");

    // append  cells to head
    head.appendChild(h1);
    head.appendChild(h2);
    head.appendChild(h3);
    head.appendChild(h4);

    // Create cells & Insert data to cells
    let c1 = document.createElement("td");
    c1.innerText = single.id;
    let c2 = document.createElement("td");
    c2.innerText = single.name;
    let c3 = document.createElement("td");
    c3.innerText = single.cost;
    let c4 = document.createElement("td");
    c4.innerText = single.increase;

    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);

    // 1st append table to the div cookie;
    cookie.appendChild(table);
    // Append head and row to table body

    table.appendChild(head);
    table.appendChild(row);
  });
}

async function combine() {
  const allTogether = await getDetails();

  createTable(allTogether);
}

combine();

let age = 12;
let movieRating = "15";

if (age <= 12) {
  console.log("you can watch some but not all.");
}

if (movieRating == "U" || movieRating == "12A") {
  console.log("you can watch it");
}

age = 20;

if (age > movieRating) {
  console.log(
    "Suitable for those aged 15 and over, but only in cinemas and for home video"
  );
}

//We use arrays to store more than one value
//We use square brackets to write an array
//We can store different data types in one array
//We don't usually store different data types in the same array, but it is possible
let myArrays = ["joe", "manny", 67, true, null];
//I want to see how long my array is in the console
//Arrays have a length property that we can access to see how many items we are storing in the array
//We use a dot . to access properties or actions inside our JS elements
console.log(myArrays.length);
//Arrays also have an index property.
//The index tells us the order in which our items are organised by specifiying the position of each item
//To access the index property we write the name of our array, and the index number in brakets (NO DOT)
//The first position for our index property is 0 zero
console.log(myArrays[1]);
//To run a JS file in the terminal, we use the commmand node and the name of the JS file

// _______________________________________________________
// workshop
//creating array
const blogposts = [
  "my first blog post",
  "my second blog post",
  "my third blog post",
];
console.log(blogposts);
//accessing items
console.log(blogposts[0]);
//adding items
blogposts[3] = "my fourth blog post";
console.log(blogposts[3]);
console.log(blogposts);

//array favouritefoods
let favouritefoods = ["cake", "biscuit"];
console.log(favouritefoods);
console.log(favouritefoods.length);
console.log(favouritefoods[1]);
favouritefoods[2] = "pizza";
console.log(favouritefoods[2]);
console.log(favouritefoods);

//array favouritecolours
let favouritecolours = ["purple", "green", "black", "red"];
console.log(favouritecolours);
console.log(favouritecolours.length);
console.log(favouritecolours[3]);

// array favouritenumbers
const favouritenumbers = [1, 2, 3, 4, 5, 6];
console.log(favouritenumbers);
console.log(favouritenumbers.length);
console.log(favouritenumbers[2]);

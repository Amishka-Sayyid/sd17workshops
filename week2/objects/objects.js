//car
const car = {
  make: "ford",
  model: "civic",
  colour: "grey",
};

car.year = 2024;

console.log(car);

//book
const book = {
  author: "rick riordan",
  title: "the lightining thief",
  numberofpages: "377",
};

book.year = 2005;

console.log(book);

//log object using table method
console.table(car);
console.table(book);

//accessing properties
console.log(car.make);

//____________________________________________
//complex objects
//________________________________________________________
// workshop example given
const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};
console.log(blogPost.author.name);
console.log(blogPost.tags[0]);

//loop
console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
}

//____________________________________________________

//
const data = {
  persons: ["amina", "fa2sh", "faiza"],
  age: [25, 30, 28],
};
//adding
data.favouritefood = ["biscuit", "cake", "bread"];
console.table(data);

//accessing
console.log(data.persons.length);
console.log(data.favouritefood[2]);

console.log(`the favourite foods are ${data.favouritefood}`);

console.log(`the favourite foods are:`);
for (let foodlist of data.favouritefood) {
  console.log(foodlist);
}

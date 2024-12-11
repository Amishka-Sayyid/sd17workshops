//car
//creating methods
const car = {
  make: "ford",
  model: "civic",
  colour: "grey",
  getadvert: function () {
    console.log(`the car is ${car.make} ${car.model} ${car.colour}`);
  },
};

car.getadvert();

// book
const book = {
  author: "rick riordan",
  title: "the lightining thief",
  numberofpages: "377",
  getdetails: function () {
    console.log(
      `my favourite novel is ${book.title}. it was written by ${book.author} and it has ${book.numberofpages} pages. and it was written in the year ${book.year}`
    );
  },
  getauthor: function () {
    return this.author;
  },
};
book.year = 2005;
book.getdetails();

const author = book.getauthor();
console.log(author);

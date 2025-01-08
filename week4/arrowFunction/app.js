function add(a, b) {
  return a + b;
}

add(1, 2);

//arrow function
const add = (a, b) => {
  return a + b;
};

add(1, 2);

//if the function body is a single line you can leave out the curly braces and the return keyword, returning the value directly:

const add = (a, b) => a + b;

add(1, 2);

//Asynchronous Arrow functions
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
//⛳️ And here it is written as an “arrow function” expression, where we assign the function to a const, and call it using that name:

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}
main();

//workshop

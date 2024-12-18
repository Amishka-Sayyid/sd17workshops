import chalk from "chalk";
console.log(chalk.blue("Hello world!"));

// Combine styled and normal strings
console.log(chalk.red("hello") + chalk.blue(" world"));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
console.log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

//  define your own themes
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color
const success = chalk.rgb(24, 53, 167);

console.log(success("success"));
console.log(error("Error!"));
console.log(warning("Warning!"));

// console.log string substitution:
const name = "Sindre";
console.log(chalk.green("Hello "), warning(name));

//random strings

console.log(
  chalk.bgGreen("hello , how are you?"),
  chalk.bgMagenta("my Name is Amina."),
  chalk.bgWhite("Nice to meet you.")
);

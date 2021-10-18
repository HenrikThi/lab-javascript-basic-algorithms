// Iteration 1: Names and Input
let hacker1 = "Henry";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Henrik";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1

hacker1 = hacker1.toUpperCase();
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i] + " ";
}

// Removes trailing space.
result = result.slice(0, -1);
console.log(result);

// 3.2
result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[hacker1.length - i - 1];
}
console.log(result);

// 3.3
hacker1 = "Henry";
hacker2 = "Henrik";

let shorterName;

if (hacker1.length < hacker2.length) {
  shorterName = hacker1;
} else {
  shorterName = hacker2;
}

for (let i = 0; i < shorterName.length; i++) {
  if (hacker1[i] !== hacker2[i]) {
    if (hacker1[i] < hacker2[i]) {
      console.log("the driver's name goes first");
    } else {
      console.log("Yo, the navigator goes first definitely.");
    }
  } else {
    if (shorterName.length - 1 === i) {
      console.log("What?! You both have the same name?");
    }
  }
}

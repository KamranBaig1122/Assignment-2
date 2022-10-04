var age = 12;

if (age < 2) {
  console.log("Person is baby");
} else if (age >= 2 && age < 4) {
  console.log("person is Todller");
} else if (age >= 4 && age < 13) {
  console.log("Person is a kid");
} else if (age >= 13 && age < 20) {
  console.log("Person is Teenager");
} else if (age >= 20 && age < 65) {
  console.log("Person is adult");
} else {
  console.log("Person is elder");
}
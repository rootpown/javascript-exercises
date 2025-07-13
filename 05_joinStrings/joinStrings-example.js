const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";


module.exports = {
  greeting,
  thisYear,
  firstName,
  lastName,
  birthYear,
}

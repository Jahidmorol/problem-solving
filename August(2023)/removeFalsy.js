// Remove falsy values from any array

// source------------
//  console.log(Boolean(NaN));

const mainArray = [
  "",
  NaN,
  "Hello",
  false,
  "ami",
  "",
  "Jahid",
  "Programmer",
  NaN,
];

const removeFalsyValues = mainArray.filter(item => Boolean(item))
console.log(removeFalsyValues);
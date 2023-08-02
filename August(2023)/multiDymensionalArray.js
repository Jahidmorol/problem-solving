// How to flatten multi-dimensional array;

const myArr = ["Me", ["jahid", "Programmer"], ["Developer", "Morol"]];
const newArray = myArr.flat();
console.log(newArray);



//when multilevel array--
const myArr2 = [
  "Me",
  ["Jahid", ["Coder"], "Programmer"],
  ["Developer", "Khan", ["Mohammad Jahid"]],
];
const newArray2 = myArr2.flat(Infinity);
console.log(newArray2);

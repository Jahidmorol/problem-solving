//Replace some word which is wrong

const kotha =
  "Next JS is a React library & this library is the most popular for SSR library now ";

//   1 word change 
  console.log(kotha.replace('library', 'framework'));

//   globali change words 
  console.log(kotha.replace(/library/g, "framework"));
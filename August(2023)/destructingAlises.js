// destructuring alieses

const WebDev = {
    languages: "JavaScript",
    founded: 1995,
    Company: "Netscape Corporation",
  };

  const {languages: languageName, founded, Company: NameOfComapny} = WebDev
  console.log(languageName);
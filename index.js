// returns queried details about cat breeds. fetch the information from thecatapi.com and prints a short description of the breed.
// jshint esversion : 6
const fetchBreedDescription = require('./breedFetcher');

if (process.argv.length > 2) {
  process.argv.slice(2).forEach(breed => {
    fetchBreedDescription(breed, (err, description) => {
      if (!err) {
        console.log(`\r\n${breed} Info:`);
        console.log(description);
      } else {
        console.log(`\r\n${err}`);
      }
    });
  });
} else {
  console.log("Expected: ");
  console.log("node breedFetcher '[breed1]' '[breed2]'  '[...]'\r\n\r\n\r\n");

  console.log("Help: Try the following command");
  console.log("node index Siberian Chartreux");
}
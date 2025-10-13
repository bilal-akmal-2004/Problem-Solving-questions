// Flatland is a country with a number of cities, some of which have space stations. Cities are numbered consecutively and each has a road of  length connecting it to the next city. It is not a circular route, so the first city doesn't connect with the last city. Determine the maximum distance from any city to its nearest space station.
// Example
// There are  cities and city  has a space station. They occur consecutively along a route. City  is  unit away and city  is  units away. City  is  units from its nearest space station as one is located there. The maximum distance is .
// Function Description
// Complete the flatlandSpaceStations function in the editor below.
// flatlandSpaceStations has the following parameter(s):
// int n: the number of cities
// int c[m]: the indices of cities with a space station
// Returns
// - int: the maximum distance any city is from a space station

let n = 5; // number of cities
let c = [0, 4];
let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < c.length; j++) {
    if (i === c[j]) {
      result.push(0);
    }
  }
  if (result.length - 1 !== i) {
    let smallest = 100000000;
    for (let j = 0; j < c.length; j++) {
      if (Math.abs(i - c[j]) <= smallest) {
        if (i - c[j] < 0) {
          smallest = Math.abs(i - c[j]);
        } else {
          smallest = i - c[j];
        }
      }
    }
    result.push(smallest);
  }
}
console.log(result);
return Math.max(...result);

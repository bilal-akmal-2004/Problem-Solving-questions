//ou are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.Example:The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.
function birthdayCakeCandles(candles) {
  // Write your code here

  let highestValue = 0;
  let counter = 0;
  for (let i = 0; i < candles.length; i++) {
    if (highestValue < candles[i]) {
      highestValue = candles[i];
      counter = 1;
    } else if (highestValue === candles[i]) {
      counter++;
    }
  }
  return counter;
}

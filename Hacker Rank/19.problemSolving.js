//An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:The player with the highest score is ranked number  on the leaderboard.Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

const uniqueRanked = [...new Set(ranked)]; // [100, 50, 40, 20, 10]
let results = [];
let i = uniqueRanked.length - 1; // start from bottom

for (let score of player) {
  while (i >= 0 && score >= uniqueRanked[i]) {
    i--;
  }
  results.push(i + 2);
}

console.log(results);
return results;

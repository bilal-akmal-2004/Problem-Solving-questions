//aum is planning to celebrate the birthday of his friend, Diksha. There are two types of gifts that Diksha wants from Taum: one is black and the other is white. To make her happy, Taum has to buy  black gifts and  white gifts.The cost of each black gift is  units.The cost of every white gift is  units.The cost to convert a black gift into white gift or vice versa is  units.Determine the minimum cost of Diksha's gifts.Example:He can buy a black gift for  and convert it to a white gift for , making the total cost of each white gift . That matches the cost of a white gift, so he can do that or just buy black gifts and white gifts. Either way, the overall cost is

let B = BigInt(b);
let W = BigInt(w);
let BC = BigInt(bc);
let WC = BigInt(wc);
let Z = BigInt(z);

let effectiveBlack = BC < WC + Z ? BC : WC + Z;
let effectiveWhite = WC < BC + Z ? WC : BC + Z;

let cost = B * effectiveBlack + W * effectiveWhite;

console.log(cost.toString());
return cost.toString();

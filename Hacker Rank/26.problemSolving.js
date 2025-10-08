//onvert a given time in numbers into words.
//If minutes are 0, use "o' clock".
//If minutes are 1–30, use "past".
//If minutes are 31–59, use "to", and the hour increases by 1.
//For 15 minutes, say "quarter", and for 30 minutes, say "half".
//Return the time in words in lowercase format.
//Input:
//h: hour (1–12)
//m: minutes (0–59)
//Output:
//String representing time in words
//Examples:
//Input:
//5
//47
//Output:
//thirteen minutes to six
//Input:
//3
//00
//Output:
//three o' clock

let hour = "";

if (h == 1) hour = "one";
if (h == 2) hour = "two";
if (h == 3) hour = "three";
if (h == 4) hour = "four";
if (h == 5) hour = "five";
if (h == 6) hour = "six";
if (h == 7) hour = "seven";
if (h == 8) hour = "eight";
if (h == 9) hour = "nine";
if (h == 10) hour = "ten";
if (h == 11) hour = "eleven";
if (h == 12) hour = "twelve";

if (m == 0) return `${hour} o' clock`;
if (m == 1) return `one minute past ${hour}`;
if (m == 2) return `two minutes past ${hour}`;
if (m == 3) return `three minutes past ${hour}`;
if (m == 4) return `four minutes past ${hour}`;
if (m == 5) return `five minutes past ${hour}`;
if (m == 6) return `six minutes past ${hour}`;
if (m == 7) return `seven minutes past ${hour}`;
if (m == 8) return `eight minutes past ${hour}`;
if (m == 9) return `nine minutes past ${hour}`;
if (m == 10) return `ten minutes past ${hour}`;
if (m == 11) return `eleven minutes past ${hour}`;
if (m == 12) return `twelve minutes past ${hour}`;
if (m == 13) return `thirteen minutes past ${hour}`;
if (m == 14) return `fourteen minutes past ${hour}`;
if (m == 15) return `quarter past ${hour}`;
if (m == 16) return `sixteen minutes past ${hour}`;
if (m == 17) return `seventeen minutes past ${hour}`;
if (m == 18) return `eighteen minutes past ${hour}`;
if (m == 19) return `nineteen minutes past ${hour}`;
if (m == 20) return `twenty minutes past ${hour}`;
if (m == 21) return `twenty one minutes past ${hour}`;
if (m == 22) return `twenty two minutes past ${hour}`;
if (m == 23) return `twenty three minutes past ${hour}`;
if (m == 24) return `twenty four minutes past ${hour}`;
if (m == 25) return `twenty five minutes past ${hour}`;
if (m == 26) return `twenty six minutes past ${hour}`;
if (m == 27) return `twenty seven minutes past ${hour}`;
if (m == 28) return `twenty eight minutes past ${hour}`;
if (m == 29) return `twenty nine minutes past ${hour}`;
if (m == 30) return `half past ${hour}`;

hour = "";

if (h == 1) hour = "two";
if (h == 2) hour = "three";
if (h == 3) hour = "four";
if (h == 4) hour = "five";
if (h == 5) hour = "six";
if (h == 6) hour = "seven";
if (h == 7) hour = "eight";
if (h == 8) hour = "nine";
if (h == 9) hour = "ten";
if (h == 10) hour = "eleven";
if (h == 11) hour = "twelve";
if (h == 12) hour = "one";

if (m == 31) return `twenty nine minutes to ${hour}`;
if (m == 32) return `twenty eight minutes to ${hour}`;
if (m == 33) return `twenty seven minutes to ${hour}`;
if (m == 34) return `twenty six minutes to ${hour}`;
if (m == 35) return `twenty five minutes to ${hour}`;
if (m == 36) return `twenty four minutes to ${hour}`;
if (m == 37) return `twenty three minutes to ${hour}`;
if (m == 38) return `twenty two minutes to ${hour}`;
if (m == 39) return `twenty one minutes to ${hour}`;
if (m == 40) return `twenty minutes to ${hour}`;
if (m == 41) return `nineteen minutes to ${hour}`;
if (m == 42) return `eighteen minutes to ${hour}`;
if (m == 43) return `seventeen minutes to ${hour}`;
if (m == 44) return `sixteen minutes to ${hour}`;
if (m == 45) return `quarter to ${hour}`;
if (m == 46) return `fourteen minutes to ${hour}`;
if (m == 47) return `thirteen minutes to ${hour}`;
if (m == 48) return `twelve minutes to ${hour}`;
if (m == 49) return `eleven minutes to ${hour}`;
if (m == 50) return `ten minutes to ${hour}`;
if (m == 51) return `nine minutes to ${hour}`;
if (m == 52) return `eight minutes to ${hour}`;
if (m == 53) return `seven minutes to ${hour}`;
if (m == 54) return `six minutes to ${hour}`;
if (m == 55) return `five minutes to ${hour}`;
if (m == 56) return `four minutes to ${hour}`;
if (m == 57) return `three minutes to ${hour}`;
if (m == 58) return `two minutes to ${hour}`;
if (m == 59) return `one minute to ${hour}`;

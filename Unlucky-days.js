/*
Friday 13th or Black Friday is considered as unlucky day. 
Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.

Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/


// Solution

function unluckyDays(year){
  return Array(12)
    .fill(0)
    .map((el, ind) => new Date(String(year), ind, 13))
    .filter(el => el.getDay() === 5)
    .length;
}

// or
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null != 0);

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined != 0);

/*

Double equals(==) will perform a type conversion when comparing two things, and will handle NaN, -0, and + 0 specially to conform to IEEE 754(so NaN != NaN, and - 0 == +0);

Triple equals(===) will do the same comparison as double equals(including the special handling for NaN, -0, and + 0) but without type conversion; if the types differ, false is returned.

*/

// ===
// console.log("2" === 2);//f
// console.log(2 === 2);//t
// console.log("2" === 2);//f

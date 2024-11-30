const name = "Jay Prajapati ";
repoCount = 19;

// console.log(name + repoCount + " Value");

// [` `, backTicks means string interpulition]

console.log(`Hello My Name is ${name} and My Repo Count is ${repoCount}`);

// (new means Objects)
// const gameName = new String("Dev jay");
// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("v"));
// console.log(gameName.substring(0, 3));

// const dev = "     hello Jay Dev     ";
// console.log(dev);
// console.log(dev.trim());

const intro = "Jay-Prajapati from Gundrasan";

// const newStr = intro.substring(0, 5);
// console.log(newStr);

const newStr2 = intro.slice(-3, 4); //provide negaitve value to return string
// console.log(newStr2);

const url = "http://Dev%20jay.com/jay%20";
// console.log(url.replace("%20", "-"));

// console.log(url.includes("jay"));

const gameName = new String("Jay-Prajapati-Dev");

// console.log(gameName);
console.log(gameName.split("-"));

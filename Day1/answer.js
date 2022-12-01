const fs = require("fs");
const readline = require("readline");

async function main() {
  const file = fs.createReadStream("inputList.txt");

  const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity,
  });

  const arrayOfTotalCalories = [];

  let totalCalories = 0;

  for await (const line of rl) {
    if (line !== "") {
      totalCalories += parseInt(line);
    } else {
      arrayOfTotalCalories.push(totalCalories);
      totalCalories = 0;
    }
  }

  let highestCalories = 0;
  for await (const totalCalories of arrayOfTotalCalories) {
    if (totalCalories > highestCalories) {
      highestCalories = totalCalories;
    }
  }

  console.log({ "reponse part1": highestCalories });

  arrayOfBestThree = arrayOfTotalCalories.sort((a, b) => b - a).slice(0, 3);
  let sumOfThree = 0;
  arrayOfBestThree.forEach((element) => {
    sumOfThree += element;
  });

  console.log({ "reponse part2": sumOfThree });
}

main();

const fs = require("fs");
const { mainModule } = require("process");
const readline = require("readline");

async function main() {
  const file = fs.createReadStream("inputList.txt");

  const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity,
  });

  let sumOfPoints = 0;
  let strategyScore = 0;

  for await (const line of rl) {
    const lineArray = line.split(" ");

    // rock gives 1, paper gives 2, scissors gives 3
    // loss give 0, draw gives 3, win gives 6
    /*
       rock = A & X
       paper = B & Y
       scissors = C & Z
    */

    if (lineArray[0] === "A") {
      if (lineArray[1] === "X") {
        sumOfPoints += 4;
      }
      if (lineArray[1] === "Y") {
        sumOfPoints += 8;
      }
      if (lineArray[1] === "Z") {
        sumOfPoints += 3;
      }
    }
    if (lineArray[0] === "B") {
      if (lineArray[1] === "X") {
        sumOfPoints += 1;
      }
      if (lineArray[1] === "Y") {
        sumOfPoints += 5;
      }
      if (lineArray[1] === "Z") {
        sumOfPoints += 9;
      }
    }
    if (lineArray[0] === "C") {
      if (lineArray[1] === "X") {
        sumOfPoints += 7;
      }
      if (lineArray[1] === "Y") {
        sumOfPoints += 2;
      }
      if (lineArray[1] === "Z") {
        sumOfPoints += 6;
      }
    }

    //part2

    if (lineArray[0] === "A") {
      if (lineArray[1] === "X") {
        //i give sciccors and loose
        strategyScore += 3;
      }
      if (lineArray[1] === "Y") {
        //i give rock and draw
        strategyScore += 4;
      }
      if (lineArray[1] === "Z") {
        //i give paper and win
        strategyScore += 8;
      }
    }
    // p1 give paper
    if (lineArray[0] === "B") {
      if (lineArray[1] === "X") {
        //i give rock and loose
        strategyScore += 1;
      }
      if (lineArray[1] === "Y") {
        //i give paper and draw
        strategyScore += 5;
      }
      if (lineArray[1] === "Z") {
        //i give scissors and win
        strategyScore += 9;
      }
    }
    //p1 give scissors
    if (lineArray[0] === "C") {
      if (lineArray[1] === "X") {
        //i give paper and loose
        strategyScore += 2;
      }
      if (lineArray[1] === "Y") {
        //i give scissors and draw
        strategyScore += 6;
      }
      if (lineArray[1] === "Z") {
        //i give rock and win
        strategyScore += 7;
      }
    }
  }

  console.log({ "reponse part1": sumOfPoints });

  // Part 2
  /*
  X mean loss, Y mean draw, Z mean win
    rock = A & X
    paper = B & Y
    scissors = C & Z
  */
  // rock gives 1, paper gives 2, scissors gives 3
  // loss give 0, draw gives 3, win gives 6

  console.log({ "reponse part2": strategyScore });
}

main();

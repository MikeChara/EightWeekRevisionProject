// const seconds = 923823423424242424242442342342424293;

// function formatDuration(seconds) {
//   let years = 0;
//   let months = 0;
//   let days = 0;
//   let hours = 0;
//   let minutes = 0;
//   goAgain(seconds);
//   function goAgain(seconds) {
//     for (let i = 0; i < 20; i++) {
//       //years
//       if (seconds > 31557600) {
//         seconds = seconds - 31557600;
//         years++;
//         goAgain(seconds);
//         break;
//       }
//       //months
//       if (seconds > 2629800) {
//         seconds = seconds - 2629800;
//         months++;
//         goAgain(seconds);
//         break;
//         //days
//       }
//       if (seconds > 86400) {
//         seconds = seconds - 86400;
//         days++;
//         goAgain(seconds);
//         break;
//         //hours
//       }
//       if (seconds > 3600) {
//         seconds = seconds - 3600;
//         hours++;
//         goAgain(seconds);
//         break;
//         //minutes
//       }
//       if (seconds > 60) {
//         seconds = seconds - 60;
//         minutes++;
//         goAgain(seconds);
//         break;
//       }
//     }
//   }
//   console.log(
//     `years ${years}, months ${months}, days ${days}, hours ${hours}, minutes ${minutes}, seconds, ${seconds}`
//   );
// }
// formatDuration(seconds);

return the digital root, eg 362: 3+6+2+ = 10, 10: 1+0 = digital root 1
let n = 983475937598345;
function digitalRoot(n) {
  let sn = n.toString();
  while (sn > 9) {
    let sum = 0;
    sn.split("").forEach((sne) => (sum = sum + +sne));
    console.log(sum);
    sn = sum.toString();
  }
  console.log("return console", sn);
}
digitalRoot(n);
function recursive(sn, sum = 0) {
  let logicBreak = 0;
  sn.split("").forEach((sne) => (sum = sum + +sne));
  while (sum > 9) {
    logicBreak = recursive(sum.toString());
    break;
  }
  if ((logicBreak < 9) & (sum > 9)) {
    console.log("returned sum", sum);
    console.log("logicBreak fired", logicBreak);
    return logicBreak;
  }
  console.log("sum fired", sum);
  return sum;
}

//turn this into a phone number like: (123) 456-7890"

let numbers = "1 2 -3 4 5";
function highAndLow(numbers) {
  let numArr = numbers.split(" ");
  console.log(numArr);
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i]);
  }
  console.log(numArr);
  let numMax = Math.max(...numArr);
  let numMin = Math.min(...numArr);
  console.log(numMax);
  console.log(numMin);
  let answer = numMax(o);
}

highAndLow(numbers);

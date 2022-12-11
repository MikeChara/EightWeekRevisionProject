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

// return the digital root, eg 362: 3+6+2+ = 10, 10: 1+0 = digital root 1
// let n = 983475937598345;
// function digitalRoot(n) {
//   let sn = n.toString();
//   while (sn > 9) {
//     let sum = 0;
//     sn.split("").forEach((sne) => (sum = sum + +sne));
//     console.log(sum);
//     sn = sum.toString();
//   }
//   console.log("return console", sn);
// }
// digitalRoot(n);
// function recursive(sn, sum = 0) {
//   let logicBreak = 0;
//   sn.split("").forEach((sne) => (sum = sum + +sne));
//   while (sum > 9) {
//     logicBreak = recursive(sum.toString());
//     break;
//   }
//   if ((logicBreak < 9) & (sum > 9)) {
//     console.log("returned sum", sum);
//     console.log("logicBreak fired", logicBreak);
//     return logicBreak;
//   }
//   console.log("sum fired", sum);
//   return sum;
// }

//turn this into a phone number like: (123) 456-7890"

// let numbers = "1 2 -3 4 5";
// function highAndLow(numbers) {
//   let numArr = numbers.split(" ");
//   console.log(numArr);
//   for (let i = 0; i < numArr.length; i++) {
//     numArr[i] = parseInt(numArr[i]);
//   }
//   console.log(numArr);
//   let numMax = Math.max(...numArr);
//   let numMin = Math.min(...numArr);
//   console.log(numMax);
//   console.log(numMin);
//   let answer = numMax(o);
// }

// highAndLow(numbers);

// let num = 39;
// function persistence(num) {
//   let sn = num.toString();
//   while (sn > 9) {
//     let sum = 1;
//     sn.split("").forEach((sne) => (sum = sum * +sne));
//     sn = sum.toString();
//   }
//   console.log(+sn);
// }
// persistence(num);

// let names = ["Alex", "Jacob", "Mark", "Max"];
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//   if (names.length === 0) {
//     console.log("no one likes this");
//   }
//   if (!names) {
//     console.log("no one likes this");
//   }

//   if (names.length === 1) {
//     console.log(`${names[0]} likes this`);
//   }
//   if (names.length === 2) {
//     console.log(`${names[0]} and ${names[1]} like this`);
//   }
//   if (names.length === 3) {
//     console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
//   }
//   if (names.length >= 4) {
//     console.log(`${names[0]}, ${names[1]} and ${names.length - 2} like this`);
//   }
// }
// likes(names);
// strictEqual(humanReadable(86399), '23:59:59',
// let seconds = 86399;

// function humanReadable(seconds) {
//   let minutes = 0;
//   let hours = seconds / 60 / 60;
//   console.log(hours);
//   // return "";
// }
// humanReadable(seconds);

// const numWordPairs = [];
// function dave() {
//   let property = 3;
//   let word = "hello";
//   numWordPairs.push({ property: word });
//   console.log(`numWordPairs:`, numWordPairs);
//   function rename() { // function to rename on button click
//     numwordPairs.map(function(bollocksobject, index) {
//       numwordPair[index] =
//         obj = obj['Burma']; // Assign new key
//         delete obj['Burma']; // Delete old key
//         return obj;
//     });
// }
// dave(numWordPairs);
// // how do I get it to instead be { 3: 'hello' } ?

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// let iterable = [1, 2, 2, 3, 3];
// var uniqueInOrder = function (iterable) {
//   let array = [];
//   console.log(iterable);
//   if (typeof iterable[0] === "number") {
//     iterable
//       .toString()
//       .split(",")
//       .forEach((e) => {
//         if (e !== array[array.length - 1]) {
//           array.push(e);
//         }
//         console.log("return", array);
//         console.log(
//           "numcheck",
//           array.map((num) => (num = +num))
//         );
//       });
//   }
//   iterable
//     .toString()
//     .split("")
//     .forEach((e, index) => {
//       console.log("pre-if", e);
//       if (e !== array[array.length - 1] && e !== ",") {
//         array.push(e);
//         console.log("arr", array);
//       }
//     });
//   console.log("return", array);
//   return array;
// };
// uniqueInOrder(iterable);

// let url = "http://google.com/";
// function domainName(url) {
//   let stringurl = url.toString;

//   let baseurl = new URL(url);
//   let hosturl = baseurl.hostname;
//   let urlpath = baseurl.path;
//   let urlproto = baseurl.protocol;
//   let urlarr = [];
//   for (let i = 0; i < hosturl.length; i++) {
//     if (hosturl[i] == ".") {
//       console.log(urlarr.join(""));
//     }
//     urlarr.push(hosturl[i]);
//   }
// }

// domainName(url);

function whichRoomAreYouGoingInto(currentRoom) {
  if (0 === arguments.length) {
    return console.warn(
      "Did you forget to pass in your room number when calling the function? How can I help you when you won't help me?"
    );
  }

  if (
    "number" === typeof currentRoom &&
    Number.isSafeInteger(currentRoom) &&
    currentRoom >= 1 &&
    currentRoom <= 58
  ) {
    return console.log(
      "Thanks, please make your way to",
      Math.ceil(currentRoom / 3),
      "(if you're not already there)"
    );
  }

  console.error(currentRoom, "is not a valid room number, I'm disappointed.");
}
whichRoomAreYouGoingInto(39);

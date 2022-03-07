//Business Logic
// export default function FUNCTION NAME()

export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }


splitString() {
  const arrays = new Map([
    [1, this.line1.split(' ')],
    [2, this.line2.split(' ')],
    [3, this.line3.split(' ')]
  ])
  return arrays
}


// vowelChecker() {
//   let vowelCount = 0;
//   wordArray = splitString();
//     wordArray.forEach(function(word){
//       if(word.inlcudes("a" || "e" || "i" || "o" || "u")){
//         vowelCount ++
//       }
//       return vowelCount;
//     })
// }
}
// TEST INPUT
let myTest = new Haiku("me and olds", "me and best", "me and rando");
myTest.splitString();
let input1 = new Haiku("cat hat bat", "fat hat shoe", "goop man");

input1.splitString();


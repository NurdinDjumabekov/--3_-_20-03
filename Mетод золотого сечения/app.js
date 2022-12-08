let a = 0;
let b = 1;
let E = 0.1;
let TAO = 1.618;
const exponent = 2.72;
let x1;
let x2;
let fX1;
let fX2;
let line = "-";
let En = b - a;
while (En > E) {
  console.log("a = " + a);
  console.log("b = " + b);
  En = b - a;
  console.log("En = " + En);
  if (En > E) {
    x1 = b - (b - a) / TAO;
    x2 = a + (b - a) / TAO;
    fX1 = x1 ** 4 + exponent ** -x1;
    fX2 = x2 ** 4 + exponent ** -x2;
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
    console.log("fX1 = " + fX1);
    console.log("fX2 = " + fX2);
    if (fX1 > fX2) {
      a = x1 + 0;
    } else if (fX1 < fX2) {
      b = x2 + 0;
    }
  } else if (En < E) {
    console.log("En(break) = " + En);
  }
  console.log(line.repeat(55));
}
let xMin = (a + b) / 2;
console.log("xMin = ", Math.floor(xMin * 10000) / 10000);
console.log("a = ", Math.floor(a * 10000) / 10000);
console.log("b = ", Math.floor(b * 10000) / 10000);

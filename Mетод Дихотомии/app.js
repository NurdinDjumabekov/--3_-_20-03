///////////////Example_2 : F(x) = x**4 + e**-x

// let E = 0.1;
// let tilda = 0.02;
// const exponent = 2.72;
// let a = 0;
// let b = 1;
// let En = (b - a) / 2;
// let x1;
// let x2;
// let fX1;
// let fX2;
// let line = "-";
// let j = 0;
// while (En > E) {
//   j++;
//   console.log("a = " + a);
//   console.log("b = " + b);
//   En = (b - a) / 2;
//   console.log("En = " + En + "(" + j + ")");
//   if (En > E) {
//     En = (a + b - tilda) / 2;
//     x1 = (a + b - tilda) / 2;
//     x2 = (a + b + tilda) / 2;
//     fX1 = x1 ** 4 + exponent ** -x1;
//     fX2 = x2 ** 4 + exponent ** -x2;

//     console.log("x1 = " + x1);
//     console.log("x2 = " + x2);
//     console.log("fX1 = " + fX1);
//     console.log("fX2 = " + fX2);
//     if (fX1 > fX2) {
//       a = x1 + 0;
//     } else if (fX1 < fX2) {
//       b = x2 + 0;
//     }
//   } else if (En < E) {
//     console.log("En(break) = " + En);
//   }
//   console.log(line.repeat(55));
// }

// let xMin = (a + b) / 2;
// let FxMin = xMin ** 4 + exponent ** -xMin;
// console.log("FxMin = ", Math.floor(FxMin * 10000) / 10000);
// console.log("xMin = ", Math.floor(xMin * 10000) / 10000);
// console.log("a = ", Math.floor(a * 10000) / 10000);
// console.log("b = ", Math.floor(b * 10000) / 10000);

///////////////Example_2 : F(x) = x**2 - 2x + e**-x

// let E = 0.03;
// let tilda = 0.004;
// const exponent = 2.72;
// let a = 1;
// let b = 1.5;
// let En = (b - a) / 2;
// let x1;
// let x2;
// let fX1;
// let fX2;
// let line = "-";
// let j = 0;
// while (En > E) {
//   j++;
//   console.log("a = " + a);
//   console.log("b = " + b);
//   En = (b - a) / 2;
//   console.log("En" + "(" + j + ") = " + En);
//   if (En > E) {
//     En = (a + b - tilda) / 2;
//     x1 = (a + b - tilda) / 2;
//     x2 = (a + b + tilda) / 2;
//     fX1 = x1 ** 2 - 2 * x1 + exponent ** -x1;
//     fX2 = x2 ** 2 - 2 * x2 + exponent ** -x2;

//     console.log("x1 = " + x1);
//     console.log("x2 = " + x2);
//     console.log("fX1 = " + fX1);
//     console.log("fX2 = " + fX2);
//     if (fX1 > fX2) {
//       a = x1 + 0;
//     } else if (fX1 < fX2) {
//       b = x2 + 0;
//     }
//   } else if (En < E) {
//     console.log("En(break) = " + En);
//   }
//   console.log(line.repeat(55));
// }

// let xMin = (a + b) / 2;
// let FxMin = xMin ** 2 - 2 * xMin + exponent ** -xMin;
// console.log("FxMin = ", Math.floor(FxMin * 10000) / 10000);
// console.log("xMin = ", Math.floor(xMin * 10000) / 10000);
// console.log("a = ", Math.floor(a * 10000) / 10000);
// console.log("b = ", Math.floor(b * 10000) / 10000);

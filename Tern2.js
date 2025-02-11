let a = Math.floor(Math.random() * 20) + 1;
console.log(`a = ${a}`);
function manyChecks() {
     return (a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case ' : '')) + (a === 15 ? 'but a is not 15 ' : '') + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5') + (a % 2 ? ' and a is odd' : ' and a is even ');
}
function ifelse() {
     let s = '';
     if (a > 10) {
          s += 'a is bigger than 10 ';
     }
     else {
          s += 'a is less than or equal to 10 ';
     };
     if (a === 5) {
          s += 'an example of a special case ';
     };
     if (a === 15) {
          s += 'but a is not 15 ';
     };
     if (a > 5) {
          s += 'and a is greater than 5';
     }
     else {
          s += 'and a is less than or equal to 5';
     };
     if (a % 2) {
          s += ' and a is odd';
     }
     else {
          s += ' and a is even ';
     };
     return s;
}
function switchcase() {
     let b = true;
     switch (b) {
          case a > 10 && a !== 15 && a % 2 == 1:
               return ('a is bigger than 10 and a is greater than 5 and a is odd');
          case a > 10 && a !== 15 && a % 2 == 0:
               return ('a is bigger than 10 and a is greater than 5 and a is even');
          case a === 15:
               return ('a is bigger than 10 but a is not 15 and a is greater than 5 and a is odd');
          case a <= 10 && a > 5 && a % 2 == 1:
               return ('a is less than or equal to 10 and a is greater than 5 and a is odd');
          case a <= 10 && a > 5 && a % 2 == 0:
               return ('a is less than or equal to 10 and a is greater than 5 and a is even');
          case a < 5 && a % 2 == 1:
               return ('a is less than or equal to 10 and a is less than or equal to 5 and a is odd');
          case a < 5 && a % 2 == 0:
               return ('a is less than or equal to 10 and a is less than or equal to 5 and a is even');
          case a === 5:
               return ('a is less than or equal to 10 an example of a special case and a is less than or equal to 5 and a is odd');
     }
}
console.log("Результат с использованием 'if...else':");
console.log(ifelse());
console.log("Результат с использованием 'switch()':");
console.log(switchcase());
console.log("Результат с использованием условного оператора:");
console.log(manyChecks());
// 変数(num)が3の倍数の場合は “3の倍数です”、
// 5の倍数の場合は “5の倍数です”、
// 3と5の倍数の場合は “3と5の倍数です”、
// それ以外の場合は変数(num)を出力する条件式を記述してください。
// ただし、変数(num)は正の整数とします。
// 作業手順は後述の各Stepを参考にしてください。

let num = Math.floor(Math.random() * 100);
console.log(num);

if( num % 15 === 0 ){
  console.log('3と5の倍数です');
}

else if( num % 3 === 0 ){
  console.log('3の倍数です');
}

else if( num % 5 === 0 ){
  console.log('5の倍数です');
}

else
    console.log(num);
    
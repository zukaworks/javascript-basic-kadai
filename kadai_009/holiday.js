// リストの中身を先頭から全て取り出して、出力結果が以下のようになるプログラムを、
// for文、while文、それぞれを利用して記述してください。
// 作業手順は後述の各Stepを参考にしてください。

const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i])
}

const japaneseholidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
let math = 0;
while (math < 16) {
  console.log(japaneseholidays[math])
  math = math  + 1;
}

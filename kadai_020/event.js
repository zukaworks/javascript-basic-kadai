// ボタンがクリックされたら2秒後に文章を書き換えるプログラムを記述してください。
// 作業手順は後述の各Stepを参考にしてください。

// event.jsファイルに、課題内容が実現できるプログラムを記述してください。
// 取得したHTML要素は、定数に代入してプログラム内で使用してください。

const aftertext = document.getElementById('text');
const botton = document.getElementById('btn');

botton.addEventListener('click',() => {
  setTimeout(() => {
    aftertext.textContent = 'ボタンをクリックしました';
    console.log(aftertext);
  },2000);
  
});
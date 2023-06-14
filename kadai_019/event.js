let aftertext = document.getElementById('text');
const botton = document.getElementById('btn');


botton.addEventListener('click',() => {
  aftertext.textContent = 'ボタンをクリックしました';
  console.log(aftertext);

});
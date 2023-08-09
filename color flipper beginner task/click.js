const colors = ['green', 'red', 'rgb(0,0,0)', 'rgba(133,122,200)', 'blue', 'purple', 'lightpink'];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    const randomNumber = GetRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
 function GetRandomNumber(){
    return Math.floor(Math.random() * colors.length);
 }





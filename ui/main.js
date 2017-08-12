console.log('Loaded!');

//change the text of main-text
var element= document.getElementById('main-text');
element.innerHTML='New-value';

//move the img
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginleft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick= function()
{
    var interval = setInterval(moveRight , 100);
};
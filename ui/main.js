console.log('Loaded!');

//change the text of main-text
var element= document.getElementById('main-text');
element.innerHTML='New-value';

//move the img
var img=document.getElementById('madi');
img.onclick= function()
{
    img.style.marginLeft= '100px';
};
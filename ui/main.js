console.log('Loaded!');
var img=document.getElementById('pressu');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
//var marginLeft=margin-Left;
img.onclick=function(){
  var interval=setInterval(moveRight,50);
};
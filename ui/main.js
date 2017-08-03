console.log('Loaded!');
var img=document.getElementById('pressu');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
//var marginLeft=margin-Left;
img.onclick=function(){
  img.style.marginLeft='100px';
};
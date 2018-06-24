var maxIndex = $('.services-scroll span').length,
    curIndex = 0;

$(function(){
  spin();
})
  
function spin(){
$('.services-scroll').animate({ scrollTop: curIndex * $('.services-scroll span').height() + 'px' }, 300, function(){
  if(curIndex + 1 === maxIndex){
    curIndex = 0;
  } else {
    curIndex++;
  }
  setTimeout(function(){ spin() }, 900);
});
}
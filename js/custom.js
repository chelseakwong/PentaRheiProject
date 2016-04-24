$(document).ready(function(){


var $grid0 = $('.upstream-grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300,
    isFitWidth:true
});  
    
$grid0.imagesLoaded().progress( function() {
    $grid0.masonry('layout');
}); 
    
var $grid1 = $('.waterfall1').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300,
    isFitWidth:true
});  
    
$grid1.imagesLoaded().progress( function() {
    $grid1.masonry('layout');
}); 

var $grid2 = $('.waterfall2').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300,
    isFitWidth:true
});  
    
$grid2.imagesLoaded().progress( function() {
    $grid2.masonry('layout');
}); 

var $grid3 = $('.waterfall3').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300,
    isFitWidth:true
});  
    
$grid3.imagesLoaded().progress( function() {
    $grid3.masonry('layout');
}); 
    
var $grid4 = $('.downstream').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300,
    isFitWidth:true
});  
    
$grid4.imagesLoaded().progress( function() {
    $grid4.masonry('layout');
}); 

})
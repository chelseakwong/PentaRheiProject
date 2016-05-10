var playing;
var downstreamSound,intro_end,large_riversound,
    med_riversound, upstreamsound, weak_riversound;
var allSounds;
var playing = false;

// Play one sound at a time
function playOnePauseAll(sound){
    for (var i = 0; i<allSounds.length; i++){
        if (allSounds[i] != sound){
            console.log(i);
            console.log(allSounds[i]);
            allSounds[i].pause();
        }
        else{
            console.log("play sound")
            allSounds[i].play();
            playing = true;
        }
    }
}

function checkAndPlay(list,sound){
    for (var i = 0; i < list.length; i++){
        var elem = list[i];
        var box = elem.getBoundingClientRect()
        if ((box.top <= 0)&&(box.bottom>=0)){
            console.log("play"+elem)
            playOnePauseAll(sound)
        }
    }
}

$(document).ready(function(){
    //init vars
    playing = false;
    downstreamSound = $('#downstreamsound').get(0);
    intro_end = $('#intro_end').get(0);
    large_riversound = $('#large_riversound').get(0);
    med_riversound = $('#med_riversound').get(0);
    upstreamsound = $('#upstreamsound').get(0);
    weak_riversound = $('#weak_riversound').get(0);
    
    allSounds = [downstreamSound,intro_end,large_riversound,med_riversound,upstreamsound,weak_riversound];
    allSoundsMap = {'upstream':upstreamsound, 'downstream':downstreamSound, 'waterfall1':large_riversound, 'waterfall2': weak_riversound, 'waterfall3':med_riversound}
        
//set up grid

//    var $grid0 = $('.upstream-grid').masonry({
//      // options
//      itemSelector: '.grid-item',
//      columnWidth: 300,
//        isFitWidth:true
//    });  
//
//    $grid0.imagesLoaded().progress( function() {
//        $grid0.masonry('layout');
//    }); 
//
//    var $grid1 = $('.waterfall1').masonry({
//      // options
//      itemSelector: '.grid-item',
//      columnWidth: 300,
//        isFitWidth:true
//    });  
//
//    $grid1.imagesLoaded().progress( function() {
//        $grid1.masonry('layout');
//    }); 
//
//    var $grid2 = $('.waterfall2').masonry({
//      // options
//      itemSelector: '.grid-item',
//      columnWidth: 300,
//        isFitWidth:true
//    });  
//
//    $grid2.imagesLoaded().progress( function() {
//        $grid2.masonry('layout');
//    }); 
//
//    var $grid3 = $('.waterfall3').masonry({
//      // options
//      itemSelector: '.grid-item',
//      columnWidth: 300,
//        isFitWidth:true
//    });  
//
//    $grid3.imagesLoaded().progress( function() {
//        $grid3.masonry('layout');
//    }); 
//
    var $grid4 = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 300,
        isFitWidth:true
    });  

    $grid4.imagesLoaded().progress( function() {
        $grid4.masonry('layout');
    }); 
    
})



window.onscroll = function(){
    //audio play when text is reached
    var pageScroll = $(window).scrollTop();
    
    var classes = ['upstream','waterfall1','waterfall2', 'waterfall3', "downstream"]
    
    for (var i = 0; i < classes.length; i++){
        var divs = document.getElementsByClassName(classes[i])
        checkAndPlay(divs, allSoundsMap[classes[i]])
    }
    //position of divs by class
    var upstreams = document.getElementsByClassName('upstream');
    checkAndPlay(upstreams, upstreamsound)
    
}
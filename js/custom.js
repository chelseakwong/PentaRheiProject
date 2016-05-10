var playing;
var downstreamSound,intro_end,large_riversound,
    med_riversound, upstreamsound, weak_riversound;
var allSounds;

// Play one sound at a time
function playOnePauseAll(sound){
    for (var i = 0; i<allSounds.length; i++){
        if (allSounds[i] != sound){
            console.log(i);
            console.log(allSounds[i]);
            allSounds[i].pause();
        }
        else{
            allSounds[i].play();
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
        
//set up grid

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

window.onscroll = function(){
    //audio play when text is reached
    var pageScroll = $(window).scrollTop();
    
    //position of divs
    var upstreamtxt = document.getElementById('upstreamtxt');
    var upstreamtxtPos = upstreamtxt.getBoundingClientRect();
    
    var waterfall1txt = document.getElementById('waterfall1txt');
    var waterfall1txtPos = waterfall1txt.getBoundingClientRect();
    
    var waterfall2txt = document.getElementById('waterfall2txt');
    var waterfall2txtPos = waterfall2txt.getBoundingClientRect(); 
    
    var waterfall3txt = document.getElementById('waterfall3txt');
    var waterfall3txtPos = waterfall3txt.getBoundingClientRect(); 
    
    var downstreamtxt = document.getElementById('downstreamtxt');
    var downstreamtxtPos = downstreamtxt.getBoundingClientRect();
    
    var secondLast = document.getElementById('secondLast');
    var secondLastPos = secondLast.getBoundingClientRect();
    
    
    
    if ((upstreamtxtPos.top <= 0)&&(upstreamtxtPos.bottom>=0)){
        playOnePauseAll(upstreamsound);
    }
    else if ((waterfall1txtPos.top <= 0)&&(waterfall1txtPos.bottom>=0)){
        playOnePauseAll(large_riversound);
    }
    else if ((waterfall2txtPos.top <= 0)&&(waterfall2txtPos.bottom>=0)){
        playOnePauseAll(weak_riversound);
    }
    else if ((waterfall3txtPos.top <= 0)&&(waterfall3txtPos.bottom>=0)){
        playOnePauseAll(med_riversound);
    }
    else if ((downstreamtxtPos.top <= 0)&&(downstreamtxtPos.bottom>=0)){
        playOnePauseAll(downstreamsound);
    }
}
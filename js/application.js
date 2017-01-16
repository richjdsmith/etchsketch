$(document).ready(function(){


//Generating the grid of divs -  .block dimensions not set as of yet.
var gridWidth = 16;
var gridHeight = 16;
wrapperWidth = $(".wrapper").outerWidth();
wrapperHeight = $(".wrapper").outerHeight();
createGrid = function (){
    for (i = 0; i < gridHeight + 1; i++){
        $("<div class='row'></div").appendTo(".grid");   
    }

    for (i = 1; i < gridWidth + 1; i++){
        $("<div class='block'><p></p></div>").appendTo(".row");
    }
};
createGrid();

//Setting .block dimension based on calculated height of grid.
setBlockDimensions = function(){
    
    var currentWidth = $(".block").outerWidth(true);
    var currentHeight = $(".block").outerHeight(true);

    $(".block").css("width", function(){
            return Math.round((wrapperWidth - (currentWidth * gridWidth))/(gridWidth + 2));
        
        });
    $(".block").css("height", function(){
            return Math.round($(".block").outerWidth());
            });
};
setBlockDimensions();

$(".row").css("height", function(){
    return $(".block").outerHeight(true);
});



});



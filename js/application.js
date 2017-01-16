$(document).ready(function(){


//Generating the grid of divs -  .block dimensions not set as of yet.
var gridWidth = 16;
var gridHeight = 16;
wrapperWidth = $(".wrapper").outerWidth();
wrapperHeight = $(".wrapper").outerHeight();
createGrid = function (){
    for (i = 0; i < gridHeight; i++){
        $("<div class='row'>  </div").appendTo(".grid");   
    }

    for (i = 1; i < gridWidth + 1; i++){
        $("<div class='block'>  </div>").appendTo(".row");
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

//Setting Row heights to match block height.
$(".row").css("height", function(){
    return $(".block").outerHeight(true);
});

//Color Picker
var color = "green";


//Creating the hover effect
setBlockColor = function(){
    $(".block").hover(function(){
        $(this).css("background-color", color);
    });
};
setBlockColor();

//reset grid colors to a blank slate.
$(".button.reset").on("click", function(){
        $(".block").css("background-color", "");
});



//Custom color picking or random color depending on if hex colors are entered or random button pressed
customColorPicker = function(){

};
customColorPicker();


//This section was a joy to make /s. It rebuilds the grid in realtime based on user input on a page form field.
customGridDimension = function (){

    $("#width").keyup(function(){
        var newGridWidth = parseInt($("#width").val(), 10);

        if (newGridWidth !== gridWidth) { 
        $(".grid").empty();
        gridWidth = newGridWidth;
        createGrid ();
        setBlockDimensions();
        setBlockColor();
        console.log(newGridWidth);
        }
    });


    $("#height").keyup(function(){
        var newGridHeight = parseInt($("#height").val(), 10);

        if (newGridHeight !== gridHeight) { 
        $(".grid").empty();
        gridHeight = newGridHeight;
        createGrid ();
        setBlockDimensions();
        setBlockColor();
        console.log(newGridHeight);
        }
    });




};
customGridDimension ();








});



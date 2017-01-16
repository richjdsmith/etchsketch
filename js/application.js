

$(document).ready(function(){

var gridWidth = 16;
var height = 16;
wrapperWidth = $(".wrapper").outerWidth();

createGrid = function (){
    for (i = 0; i < height + 1; i++){
        $("<div class='row'></div").appendTo(".grid");
        
    }

    for (i = 1; i < gridWidth + 1; i++){
        $("<div class='block'><p></p></div>").appendTo(".row");
    }



};
createGrid();

setBlockwidth = function(){
    
    var currentWidth = $(".block").outerWidth();
    alert(currentWidth);

    $(".block").css({
        width: function(){
            return (wrapperWidth + (currentWidth * gridWidth))/gridWidth;
        }
        },
        {height: function(y){
            return 960/height;
            }
        }
    );
};

setBlockwidth();


});



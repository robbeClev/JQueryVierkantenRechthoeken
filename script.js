$(".vierkant").click(function () {
    $(this).hide();
})

$("#showAll").click(function () {
    $(".vierkant").show();
})

$(".rechthoek").dblclick(function(){
	// in het geval dat we bedoelen: de rechthoek waar wordt opgeklikt
    $(this).removeClass("w3-yellow w3-green").addClass("w3-purple")

       // in het geval dat we bedoelen: alle rechthoeken
	//$(".rechthoek").removeClass("w3-yellow w3-green").addClass("w3-purple")
});

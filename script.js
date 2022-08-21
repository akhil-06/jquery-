// console.log("Hello");

$("#para1").html("Changed");

/*
function $(query){
    return document.querySelector(query);
}
*/

$("#div1").css({
    color: "red",
    height: "200px",
    width:"200px",
    fontSize: "40px",
    backgroundColor:"cyan"
});

// $('#div1').click(function () {
//     alert("Div Clicked");
// })

$("div").on('click', function () {
    console.log($(this));
    //  alert("Div Clicked");
    var element = $(this);
    element.width(element.width() + 10 + "px")
    // element.backgroundColor()
})

// $("#para2").hide();
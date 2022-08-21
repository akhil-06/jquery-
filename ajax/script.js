function fetchRandomImage() {
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function () {
    //     console.log(xhrRequest.response);
    //     var responseJson = JSON.parse(xhrRequest.response);
    //     console.log(responseJson);
    //     var imageURL = responseJson.message;
    //     $("#dog-image").attr("src", imageURL);
    // }
    // xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random");
    // xhrRequest.send();

    // $.get("https://dog.ceo/api/breeds/image/random", function (data) {
    //      $("#dog-image").attr("src", data.message);
    // });

    /*
.fail(function())
    */


    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: 'GET',
        success: function (data) {
             $("#dog-image").attr("src", data.message);
        }
    });

    .fail(function () {
        console.log('error')
    })
}

$("#fetch-dog").click(fetchRandomImage)

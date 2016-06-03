$('#target').click(function () {
    $( this ).slideUp();
    $( this ).slideDown();
    // $( this ).append("<p>Tobb</p>");
    var divCont = $('#counter').text();
    var counter = Number(divCont) + 1;
    $('#counter').text("" + counter);

});

// var cats = {
// "cat1": "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",
// "cat2": "http://hdimagesnew.com/wp-content/uploads/2015/11/cute-cat-kitty-kitten.jpg",
// };

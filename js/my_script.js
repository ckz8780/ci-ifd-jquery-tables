$(document).ready(function (){
    $('tr:odd').css('background-color', 'orange');
    $('tr:even').css('background-color', '#ffc6b3');
    
    // Traversing the DOM - Other Traversing Methods Challenge 2:
    $('th').click(function() {
        $(this).parent().children().css('background-color', 'yellow');
        $(this).parent().siblings().children().css('background-color', 'white');
    });
});
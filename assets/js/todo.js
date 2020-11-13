//Cross out individual tasks from the list by clicking
//We can only add a listener using jQuery on elements that exist when this code is run the first time (when the page loads) - here it is "ul". We don't have all the "li" when this code is run the first time
//We use on("click") to the entire ul parent instead of click(); on("click") will add listeners for all potential future elements, that don't exist yet; click() adds listeners only for exisiting elements
//2nd argument: When an "li" is clicked inside the "ul" then run this code
$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});
//Click on X to delete a task
$("ul").on("click", "span", function (event) {
    $(this)
        .parent()
        .fadeOut(300, function () {
            //fadeOut doesn't remove element, but sets display: none;
            $(this).remove();
        });
    // stops event from bubbling up into parent elements, parent elements are not triggered by clicking on their child
    event.stopPropagation();
});
//Press ENTER to add new task to the list from the input
//"which" property on the "keypress" object, corresponding to the character code (keyCode for ENTER === 13) of the key that was pressed
$("input").keypress(function (event) {
    if (event.which === 13) {
        //taking the new task from the input
        let newTask = $(this).val();
        $(this).val("");
        //creating new li and add to exisitng ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTask + "</li>");
    }
});
//Making the icon a toggle so that it can show and hide the input
$("#pencil").click(function () {
    $("input").fadeToggle()
});
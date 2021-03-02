/*
Software Engineering HW3 Javascript
Author: Phuocan Nguyen
Date: February 15, 2021
Last Updated: March 1, 2021
*/


/*
/ This button enables the display order function
/
*/
$(function() {
    $("#orderbtn").click(displayOrder);
});

/*
/ This function displays the user selected order by hiding options
/ and displaying the chosen ones along with the text.
*/
displayOrder = function() {
    $("#quantityTopping").text("Thank you for placing your order!");
         $("#notes").text("Quantity: " + $("#quantity option:selected").val()
          + " | Flavor: " + $("input[name=flavor]:checked", "#flavorForm").val()
          + " | Notes: " + $("#textnotes").val());
         $("table").hide();
         $("textarea").hide();
         $("#orderbtn").hide();

    // This portion searches for the vegan inside the text notes
    var searchVegan = document.getElementById("textnotes").value;
        if (searchVegan.indexOf("vegan")!=-1)
        {
        alert("WARNING! Cheesecake contains dairy");
        }
        if (searchVegan.indexOf("Vegan")!=-1)
        {
        alert("WARNING! Cheesecake contains dairy");
        }
}


/*
/ These functions change the name if the dropdown button to the corresponding
/ choice of the user.
/
/ POST addition allows for json data from POST to be retrieved.
/
*/
$(document).ready(function(){
    $("#janbtn").click(function(){
        $("#dropbtn").html("January");
        $.post("http://localhost:3000/orders", function(data) {
            $("#cherryLi").text(data.cherry);
            $("#chocolateLi").text(data.chocolate);
            $("#plainLi").text(data.plain);
        });
    });
    $("#febbtn").click(function(){
        $("#dropbtn").html("February");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#marbtn").click(function(){
        $("#dropbtn").html("March");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#aprbtn").click(function(){
        $("#dropbtn").html("April");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#maybtn").click(function(){
        $("#dropbtn").html("May");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#junbtn").click(function(){
        $("#dropbtn").html("June");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#julbtn").click(function(){
        $("#dropbtn").html("July");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#augbtn").click(function(){
        $("#dropbtn").html("August");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#sepbtn").click(function(){
        $("#dropbtn").html("September");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#octbtn").click(function(){
        $("#dropbtn").html("October");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#novbtn").click(function(){
        $("#dropbtn").html("November");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });
    $("#decbtn").click(function(){
        $("#dropbtn").html("December");
        $.post("http://localhost:3000/orders", function(data) {
                    $("#cherryLi").text(data.cherry);
                    $("#chocolateLi").text(data.chocolate);
                    $("#plainLi").text(data.plain);
                });
    });

});

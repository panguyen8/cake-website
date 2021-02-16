/*
Software Engineering HW3 Javascript
Author: Phuocan Nguyen
Date: February 15, 2021
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
/ choice of the user
/
*/
$(document).ready(function(){
    $("#janbtn").click(function(){
        $("#dropbtn").html("January");
    });
    $("#febbtn").click(function(){
        $("#dropbtn").html("February");
    });
    $("#marbtn").click(function(){
        $("#dropbtn").html("March");
    });
    $("#aprbtn").click(function(){
        $("#dropbtn").html("April");
    });
    $("#maybtn").click(function(){
        $("#dropbtn").html("May");
    });
    $("#junbtn").click(function(){
        $("#dropbtn").html("June");
    });
    $("#julbtn").click(function(){
        $("#dropbtn").html("July");
    });
    $("#augbtn").click(function(){
        $("#dropbtn").html("August");
    });
    $("#sepbtn").click(function(){
        $("#dropbtn").html("September");
    });
    $("#octbtn").click(function(){
        $("#dropbtn").html("October");
    });
    $("#novbtn").click(function(){
        $("#dropbtn").html("November");
    });
    $("#decbtn").click(function(){
        $("#dropbtn").html("December");
    });

});

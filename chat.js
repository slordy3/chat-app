// Date

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();

today = dd + '/' + mm + '/' + yyyy + " " + hours + ":" + minutes;

document.getElementById("day").innerHTML = today;

// Search bar ---  ÇALIŞMIYOR ---

function myFunction() {
    // Declare variables 
    var input, filter, li, tr, td, i, txtValue;
    girdi = document.getElementById("girdi");
    filter = input.value.toUpperCase();
    ul = document.getElementById("MyUL");
    li = li.getElementsByClassName("contacts");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        li = li[i].getElementsByTagName("li")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
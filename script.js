function togglenav(){
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {navbar.style.display = "flex";}
    else {navbar.style.display = "none"}
}

window.onscroll = function() {scrollfunction()};
function scrollfunction(){
    let backtotop = document.getElementsByClassName("backtotop")[1];
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
}
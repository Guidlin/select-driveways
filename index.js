let open = false;

function toggleNav() {
    if (open) {
        document.getElementById("mobile-nav").style.display = "none";
        open = false;
    } else {
        document.getElementById("mobile-nav").style.display = "block";
        open = true;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var closeButton = document.getElementById("closeButton");
    var aside = document.querySelector("aside");

    if (closeButton && aside) {
        closeButton.addEventListener("click", function () {
            aside.style.display = "none"; 
        });
    }
});

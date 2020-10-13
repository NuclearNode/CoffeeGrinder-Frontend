document.getElementByClassName("n1").addEventListener("click", function(event) {
    event.preventDefault();
});

function hide(questionId) {
    document.getElementById(questionId).classList.remove("show");
    document.getElementById(questionId).classList.add("hide");
}

function show(questionId) {
    document.getElementById(questionId).classList.remove("hide");
    document.getElementById(questionId).classList.add("show");
}

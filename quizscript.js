function hide(questionId) {
//    document.getElementById(questionId).classList.add("hide");
//    document.getElementById(questionId).classList.remove("show");
    document.getElementById(questionId).style.display = none;
}

function show(questionId) {
    document.getElementById(questionId).classList.add("show");
    document.getElementById(questionId).classList.remove("hide");
}
$(document).ready(() => {
    setTimeout(() => {
        $("#emailCollection").modal();
        clearTimeout(this);
    }, 7000);
});
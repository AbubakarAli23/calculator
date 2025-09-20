let display = document.querySelector("#display");
display.textContent = "hello";

function input() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            display.textContent = button.textContent
        })
    }
}
input()
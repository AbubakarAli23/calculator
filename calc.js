let display = document.querySelector("#display");
let arr = [];
function input() {

    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let value = buttons[i].textContent;
            if (value === "=") {
                calculation()
            } else if (value === "c") {
                arr = [];
                display.textContent = ""
            }
            else if (value === "delete") {
                arr.pop(value);
                display.textContent = arr.join("");
            }
            else {
                display.textContent += value;
                arr.push(value);
            }
        });

    }

}


function calculation() {
    let notJoined = arr;
    if (notJoined.includes("+") && notJoined.includes("-")) {
        calculation();
    }
    else if (notJoined.includes("+")) {
        let Joined = notJoined.join("");
        let splitted = Joined.split("+")
        let ans = parseFloat(splitted[0]) + parseFloat(splitted[1]);
        display.textContent = ans;
    } else if (notJoined.includes("/")) {
        let Joined = notJoined.join("");
        let splitted = Joined.split("/")
        let ans = parseFloat(splitted[0]) / parseFloat(splitted[1]);
        display.textContent = ans;
    } else if (notJoined.includes("*")) {
        let Joined = notJoined.join("");
        let splitted = Joined.split("*")
        let ans = parseFloat(splitted[0]) * parseFloat(splitted[1]);
        display.textContent = ans;
    } else if (notJoined.includes("-")) {
        let Joined = notJoined.join("");
        let splitted = Joined.split("-")
        let ans = parseFloat(splitted[0]) - parseFloat(splitted[1]);
        display.textContent = ans;
    }

}

input();

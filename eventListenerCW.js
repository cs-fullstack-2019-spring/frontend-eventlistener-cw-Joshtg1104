//Problem 1
function askingItAgain() {
    while (true) {
        var ask = prompt("Enter something. Enter 'N' to quit.");
        if (ask === "n") {
            //make sure 'n' is being compared to user input
            break;
        } else {
            console.log(ask);
        }
    }
}

let pressn = document.getElementById('pressIt');

pressn.addEventListener('click', askingItAgain);

// pressN.onclick = yepWeAskingItAgain;

//Problem 2

function number1(e)
{
    colorBlue.innerText = "1";
}
//changes text to 1

function number2(e)
{
    colorRed.innerText = "2";
}
//changes text to 2

function background1(e)
{
    colorBlue.classList.toggle("Ao");
}
//changes color of background to blue but does not toggle

function background2(e)
{
    colorRed.classList.toggle("Aka");
}
//changes color of background to red but does not toggle

var button1 = document.getElementById("one");
var colorBlue = document.getElementById("btn1");

var button2 = document.getElementById("two");
var colorRed = document.getElementById("btn2");

button1.addEventListener('click', number1);
button1.addEventListener('click', background1);

button2.addEventListener('click', number2);
button2.addEventListener('click', background2);
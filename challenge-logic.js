let input = require("fs").readFileSync("stdin", "utf8");
let values = input.split("\n");
let length = parseInt(values.shift());

let drawingHourglassStarted = "";
let drawingHourglassCompleted = "";

let lengthMinusOne = length - 1;
let lengthMinusTwo = length - 2;

if (validated(length)) {
    drawing();
}

function validated(length) {
    if (isNaN(length)) {
        console.log("O valor digitado não é um número válido!");
        return;
    } else if (length < 20) {
        console.log("O valor digitado tem que ser maior ou igual a 20!");
        return;
    } else {
        return true;
    }
}

function drawing() {
    for (let row = 0; row < length; row++) {
        for (let column = 0; column < length; column++) {

            if (row == 0 || row == lengthMinusOne || column == 0 || column == lengthMinusOne || column == row || (column + row) == lengthMinusOne) {
                drawingHourglassStarted += `#`
                drawingHourglassCompleted += `#`

            } else {

                drawingHourglassStarted += drawingStarted(row, column, lengthMinusOne);
                drawingHourglassCompleted += drawingCompleted(row, column, lengthMinusOne, lengthMinusTwo);

            }
        }

        drawingHourglassStarted += "\n";
        drawingHourglassCompleted += "\n";

    }

    // show drawingHourglass started
    console.log(drawingHourglassStarted);
    console.log(`Tamanho: ${length} \n`);

    // show drawingHourglass completed
    console.log(drawingHourglassCompleted);
    console.log(`Tamanho: ${length} \n`);
}

function drawingStarted(row, column, lengthMinusOne) {
    if (row <= (lengthMinusOne / 2) && (column > row && (column + row) < lengthMinusOne)) {
        return `#`;
    } else {
        return ` `;
    }
}

function drawingCompleted(row, column, lengthMinusOne, lengthMinusTwo) {
    if (row >= (lengthMinusOne / 2) && (column < row && (column + row) > lengthMinusTwo)) {
        return `#`;
    } else {
        return ` `;
    }
}

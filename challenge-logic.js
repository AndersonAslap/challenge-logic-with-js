let input = require("fs").readFileSync("stdin", "utf8");
let values = input.split("\n");
let length = parseInt(values.shift());

let drawingHourglass = "";
let reverse = false;

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
                drawingHourglass += `#`

            } else {

                if ((row <= (lengthMinusOne / 2) && (column > row && (column + row) < lengthMinusOne)) && !reverse) {
                    drawingHourglass += `#`;
                } else if ((row >= (lengthMinusOne / 2) && (column < row && (column + row) > lengthMinusTwo)) && reverse) {
                    drawingHourglass += `#`;
                } else {
                    drawingHourglass += ` `;
                }
            }
        }

        drawingHourglass += "\n";

        if (row == lengthMinusOne && !reverse) {

            // show drawingHourglass started
            console.log(drawingHourglass);
            console.log(`Tamanho: ${length} \n`);

            row = -1;
            reverse = !reverse;
            drawingHourglass = "";
        }

    }

    // show drawingHourglass completed
    console.log(drawingHourglass);
    console.log(`Tamanho: ${length} \n`);
}

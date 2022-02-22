let probsOnSix = [
    0,
    17,
    31,
    42,
    52,
    60,
    67,
    72,
    77,
    81,
    84,
    87,
    88,
    90,
    92,
    94,
    94,
    95,
    96,
]

function calculate() {
    if (isEmpty($('#dice-selector').val())) {
        console.log("empty dice selector");
    }
    else if ($('#dice-selector').val() <= 18) {
        document.getElementById("prob-results").innerText = ("Probablitiy: " + probsOnSix[$('#dice-selector').val()] + "%");
    } else {
        document.getElementById("prob-results").innerText = "Probablitiy: 99%";
    }
}

function addDice() {
    let value = 0;
    if (!isEmpty($('#dice-selector').val())) {
        value = parseInt($('#dice-selector').val()) + 1;
    }
        document.getElementById("dice-selector").value = value;
        document.getElementById("dice-selector").innerText = value;
    calculate();
}

function subtractDice() {
    if (parseInt($('#dice-selector').val()) > 0) {
        let value = parseInt($('#dice-selector').val()) - 1;
        document.getElementById("dice-selector").value = value;
        document.getElementById("dice-selector").innerText = value;
    }
    calculate();
}

function isEmpty(element) {
    return element === null || element === undefined || element === NaN || element === "";
}
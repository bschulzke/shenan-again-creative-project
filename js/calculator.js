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
    97,
    97,
    98
]

function calculate() {
    if (isEmpty($('#dice-selector').val())) {
        console.log("empty dice selector");
        return;
    }
    else if ($('#dice-selector').val() <= 21) {
        document.getElementById("prob-results").innerText = (probsOnSix[$('#dice-selector').val()] 
        + "% chance of rolling at least one six on " + $('#dice-selector').val() + " dice");
    } else {
        document.getElementById("prob-results").innerText = "99% chance or higher of rolling at least one six on " + $('#dice-selector').val() + " dice";
    }
    $("#prob-card").show();
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
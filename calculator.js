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
    console.log("Probablitiy " + probsOnSix[$('#dice-selector').val()]);
}

function logChange() {
    console.log($('#dice-selector').val());
}
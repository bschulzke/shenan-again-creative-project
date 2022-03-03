let calculator = new Vue({
    el: "#calculator",
    data: {
        numDice: 1,
        targets: 'six',
        probsOnSix: [
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
        ],
        probsOnFiveOrSix: [
            0,
            31,
            52,
            67,
            77,
            84,
            89,
            92,
            95,
            96,
            97,
            99,
            99,
            99,
            99,
            99,
            99,
            99,
        ],
    },
    computed: {
        percentChance() {
            if (this.targets === 'six') {
                if (this.numDice < 22) {
                    return this.probsOnSix[this.numDice];
                } else {
                    return 99;
                }
            } else if (this.targets === 'fiveOrSix') {
                if (this.numDice < 18) {
                    return this.probsOnFiveOrSix[this.numDice];
                } else {
                    return 99.99;
                }
            }
        },
    },
    methods: {
        addDice() {
            this.numDice++;
        },
        subtractDice() {
            this.numDice--;
        }
    },
    watchers: {
        numDice: function () {
            if (this.numDice < 0) {
              this.numDice = 0;
            }
    }
}
});
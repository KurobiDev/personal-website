// Card Rarities
const Rarities = {
    COMMON: {
        CHANCE: 87,
        PIC: './assets/cards/common.png'
    },

    UNCOMMON: {
        CHANCE: 10,
        PIC: './assets/cards/uncommon.png'
    },

    RARE: {
        CHANCE: 3,
        PIC: './assets/cards/rare.png'
    }
}

// Game State
var game = {
    total_pulls: 0,
    total_commons: 0,
    total_uncommons: 0,
    total_rares: 0
}

// So far I did not implement any save system, so every time the site is visited, player starts with 0 pulls.
function init() {
    if (localStorage.saved_data) {
        load_game();
    }
}

function pull() {
    //Pull a single card, with varying rarity.

    game.total_pulls += 1;

    let container = document.getElementById('pulls');

    let img = document.createElement("img");
    img.src = check_rarity();
    container.appendChild(img);

    console.log("Pulled a single card. Total number of pulls is: " + game.total_pulls);
    update()
}

function pull_ten() {
    // Pulls ten cards, each tenth card is guaranteed to be uncommon or rarer.

    // Clear the pull container
    document.getElementById('pulls').innerHTML = '';

    for (let i = 0; i < 9; i++) {
        pull();
    }

    game.total_pulls += 1;

    let container = document.getElementById('pulls');

    let img = document.createElement("img");
    img.src = guarantee();
    container.appendChild(img);

    console.log("Pulled a single card. Total number of pulls is: " + game.total_pulls);
    update()
}

function check_rarity() {
    let roll = Math.floor(Math.random() * 100) + 1;

    if (roll <= Rarities.RARE.CHANCE) {
        game.total_rares += 1;
        return Rarities.RARE.PIC;
    } else if (roll <= Rarities.UNCOMMON.CHANCE) {
        game.total_uncommons += 1;
        return Rarities.UNCOMMON.PIC;
    } else {
        game.total_commons += 1;
        return Rarities.COMMON.PIC;
    }

}

function guarantee() {
    let roll = Math.floor(Math.random() * 100) + 1;
    if (roll <= Rarities.RARE.CHANCE) {
        game.total_rares += 1;
        return Rarities.RARE.PIC
    } else {
        game.total_uncommons += 1;
        return Rarities.UNCOMMON.PIC;
    }
}

function update() {
    document.getElementById("pulls_cnt").innerHTML = game.total_pulls.toString();
    document.getElementById("common_cnt").innerHTML = game.total_commons.toString();
    document.getElementById("uncommon_cnt").innerHTML = game.total_uncommons.toString();
    document.getElementById("rare_cnt").innerHTML = game.total_rares.toString();
}

function save_game() {
    const save = game;
    const saveString = JSON.stringify(save);
    localStorage.setItem('saved_data', saveString);

    console.log("Game saved.");
}

function load_game() {
    const loadString = localStorage.getItem('saved_data');
    const load_state = JSON.parse(loadString);

    game = load_state;

    console.log("Game loaded");
}

function clear_data() {
    localStorage.clear();

    game.total_pulls= 0;
    game.total_commons= 0;
    game.total_uncommons= 0;
    game.total_rares= 0;

    window.location.reload();

    console.log("Cleared all data.");
}

window.onload = init();
window.setTimeout(update, 100);
window.setTimeout(save_game, 60000);
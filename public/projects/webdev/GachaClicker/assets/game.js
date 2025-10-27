// Card Rarities
const rarities = {
    "common": 97,
    "uncommon": 2.4,
    "rare": 0.6,
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

function pull_single() {
    pulls += 1;

    // Clear the pull table
    let tab = document.getElementById("ten");
    let rows = tab.getElementsByTagName("tr");

    rows[0].innerHTML = "";
    rows[1].innerHTML = "";

    // Clear the single pull element.
    let card = document.getElementById("single");
    card.innerHTML = "";

    let img = document.createElement("img");
    img.src = check_rarity();
    card.appendChild(img);

    console.log("Pulled a single card. Total number of pulls is: " + game.total_pulls);
    document.getElementById("info").innerHTML = "Pulled a single card.";
    update()
}

function pull_ten() {
    game.total_pulls += 10;

    // Clear the single pull element.
    document.getElementById("single").innerHTML = "";

    let tab = document.getElementById("ten");
    let rows = tab.getElementsByTagName("tr");

    // Clear both rows, so the table won't have extra cells
    rows[0].innerHTML = "";
    rows[1].innerHTML = "";

    for (let i = 0; i < 10; i++) {
        let cell = document.createElement("td");

        let img = document.createElement("img");

        // Guarantee an uncommon or rare card on tenth pull.
        if (i === 9) {
            let g_src = "";
            do {
                g_src = check_rarity();
            } while (g_src !== "./assets/cards/uncommon.png" && g_src !== "./assets/cards/rare.png");

            img.src = g_src;
        } else {
            img.src = check_rarity();
        }
        cell.appendChild(img);

        // Inserting card images into a table
        if (i < 5) {
            rows[0].appendChild(cell); // First row
        } else {
            rows[1].appendChild(cell); // Second row
        }
    }
    console.log("Pulled ten cards. Total number of pulls is: " + game.total_pulls);
    document.getElementById("info").innerHTML = "Pulled ten cards.";
    update()
}

function check_rarity() {
    let rand = Math.floor(Math.random() * 101);

    if (rand <= rarities.rare) {
        game.total_rares += 1;
        console.log("Rare: " + rand);
        return "./assets/cards/rare.png";
    } else if (rand <= rarities.uncommon) {
        game.total_uncommons += 1;
        console.log("Uncommon: " + rand);
        return "./assets/cards/uncommon.png";
    } else {
        game.total_commons += 1;
        console.log("Common: " + rand);
        return "./assets/cards/common.png";
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

    console.log("Cleared all data.");
}

window.onload = init();
window.setTimeout(update, 100);
window.setTimeout(save_game, 60000);
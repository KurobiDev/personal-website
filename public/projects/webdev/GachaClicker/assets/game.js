var pulls, commons, uncommons, rares;

        const rarities = {
            "common": 74,
            "uncommon": 23,
            "rare": 3,
        }

        function init() {
            pulls = 0;
            commons = 0;
            uncommons = 0;
            rares = 0;
        }

        function pull_single() {
            pulls += 1;

            // Clear the ten pull table
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

            console.log("Pulled a single card. Total number of pulls is: " + pulls);
            document.getElementById("info").innerHTML = "Pulled a single card.";
            update()
        }

        function pull_ten() {
            pulls += 10;

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

                // Guarantee, that there will be an uncommon or rare card on tenth pull.
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
            console.log("Pulled ten cards. Total number of pulls is: " + pulls);
            document.getElementById("info").innerHTML = "Pulled ten cards.";
            update()
        }

        function check_rarity() {
            let rand = Math.floor(Math.random() * 100) + 1;

            if (rand <= rarities.rare) {
                rares += 1;
                console.log("Rare: " + rand);
                return "./assets/cards/rare.png";
            } else if (rand <= rarities.uncommon) {
                uncommons += 1;
                console.log("Uncommon: " + rand);
                return "./assets/cards/uncommon.png";
            } else {
                commons += 1;
                console.log("Common: " + rand);
                return "./assets/cards/common.png";
            }
        }

        function update() {
            document.getElementById("pulls_cnt").innerHTML = pulls.toString();
            document.getElementById("common_cnt").innerHTML = commons.toString();
            document.getElementById("uncommon_cnt").innerHTML = uncommons.toString();
            document.getElementById("rare_cnt").innerHTML = rares.toString();
        }

        window.onload = init;
        window.setTimeout(update, 100);
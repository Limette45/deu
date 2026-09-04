const sentences = [
    "(  ) ist/sind sehr lächerlich.",

    "Sie trinkt Wasser aus (          ).",

    "Ich gehe zu (          ).",

    "Wir fahren morgen zu (          ).",

    "Das Geschenk ist von (          ).",

    "Ich lerne Deutsch für (          ).",

    "Wir gehen durch (          ).",

    "Er läuft gegen (          ).",

    "Ich lege das Buch auf (          ).",

    "Das Buch liegt auf (          ).",

    "Ich hänge das Bild an (          ).",

    "Das Bild hängt an (          )."
];

const articles = [
    "der",
    "No article",
    "ein/kein",
    "mein",
    "ihr",
    "unser",
    "euer"
];

const adjectives = [
    "alt",
    "neu",
    "klein",
    "groß",
    "schön",
    "hässlich",
    "lustig",
    "lächerlich",
    "interessant",
    "langweilig",
    "wichtig",
    "gut",
    "schlecht",
    "teuer",
    "schnell",
    "langsam"
];

const nouns = [
    "(m)Hund",
    "(m)Junge",
    "(m)Lehrer",
    "(m)Freund",
    "(m)Bruder",
    "(m)Vater",
    "(m)Tisch",
    "(m)Stuhl",
    "(m)Park",
    "(m)Garten",
    "(m)Mann",
    "(m)Student",

    "(f)Katze",
    "(f)Freundin",
    "(f)Schule",
    "(f)Universität",
    "(f)Stadt",
    "(f)Lehrerin",
    "(f)Straße",
    "(f)Wohnung",
    "(f)Tür",
    "(f)Frage",
    "(f)Antwort",
    "(f)Idee",
    "(f)Zeit",
    "(f)Sprache",

    "(n)Haus",
    "(n)Zimmer",
    "(n)Buch",
    "(n)Bild",
    "(n)Fenster",
    "(n)Bett",
    "(n)Problem",
    "(n)Spiel",
    "(n)Wasser",
    "(n)Jahr",
    "(n)Kind",

    "(pl)Kosten",
    "(pl)Menschen",
    "(pl)Leute",
    "(pl)Möbel",
    "(pl)Lebensmittel",
    "(pl)Äpfel",
    "(pl)Bäume",
    "(pl)Blumen",
    "(pl)Türen",
    "(pl)Fragen",
    "(pl)Universitäten",
    "(pl)Wohnungen",
    "(pl)Zeitungen"
];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateProblem() {
    document.getElementById("sentence").textContent =
        randomItem(sentences);

    document.getElementById("article").textContent =
        randomItem(articles);

    document.getElementById("adjective").textContent =
        randomItem(adjectives);

    document.getElementById("noun").textContent =
        randomItem(nouns);
}

document.getElementById("newProblem").addEventListener(
    "click",
    generateProblem
);

// Generate the first problem when the page opens
generateProblem();
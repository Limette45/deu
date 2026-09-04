/* =========================================================
   SENTENCE STACK

   Each sentence already contains its grammatical case.
   ========================================================= */

const sentences = [
    {
        text: "Ich sehe (  ).",
        case: "accusative"
    },
    {
        text: "Statt (          ) nehme ich das andere.",
        case: "genitive"
    },
    {
        text: "Innerhalb (          ) ist es warm.",
        case: "genitive"
    },
    {
        text: "Sie stellt sich vor (          ).",
        case: "accusative"
    },
    {
        text: "(  ) ist/sind sehr lächerlich.",
        case: "nominative"
    },
    {
        text: "Sie trinkt Wasser aus (          ).",
        case: "dative"
    },
    {
        text: "Ich gehe zu (          ).",
        case: "dative"
    },
    {
        text: "Wir fahren morgen zu (          ).",
        case: "dative"
    },
    {
        text: "Das Geschenk ist von (          ).",
        case: "dative"
    },
    {
        text: "Ich lerne Deutsch für (          ).",
        case: "accusative"
    },
    {
        text: "Wir gehen durch (          ).",
        case: "accusative"
    },
    {
        text: "Er läuft gegen (          ).",
        case: "accusative"
    },
    {
        text: "Ich lege das Buch auf (          ).",
        case: "accusative"
    },
    {
        text: "Das Buch liegt auf (          ).",
        case: "dative"
    },
    {
        text: "Ich hänge das Bild an (          ).",
        case: "accusative"
    },
    {
        text: "Das Bild hängt an (          ).",
        case: "dative"
    }
];


/* =========================================================
   ARTICLE STACK
   ========================================================= */

const articles = [
    "Definite article",
    "No article",
    "Indefinite article",
    "mein",
    "ihr",
    "unser",
    "euer"
];


/* =========================================================
   ADJECTIVE STACK
   ========================================================= */

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


/* =========================================================
   NOUN STACK
   ========================================================= */

const nouns = [

    /* Masculine */

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

    /* Feminine */

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

    /* Neuter */

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

    /* Plural */

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


/* =========================================================
   CURRENT PROBLEM
   ========================================================= */

let currentProblem = null;


/* =========================================================
   RANDOM SELECTION
   ========================================================= */

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


/* =========================================================
   NOUN PARSER

   "(m)Hund" -> gender: m, word: Hund
   "(pl)Kosten" -> gender: pl, word: Kosten
   ========================================================= */

function parseNoun(noun) {

    const closingBracket = noun.indexOf(")");

    return {
        gender: noun.substring(1, closingBracket),
        word: noun.substring(closingBracket + 1)
    };
}


/* =========================================================
   ARTICLE DECLENSION
   ========================================================= */

function declineArticle(article, gender, grammaticalCase) {

    /* No article */

    if (article === "No article") {
        return "";
    }


    /* Definite article */

    if (article === "Definite article") {

        const forms = {

            nominative: {
                m: "der",
                f: "die",
                n: "das",
                pl: "die"
            },

            accusative: {
                m: "den",
                f: "die",
                n: "das",
                pl: "die"
            },

            dative: {
                m: "dem",
                f: "der",
                n: "dem",
                pl: "den"
            },

            genitive: {
                m: "des",
                f: "der",
                n: "des",
                pl: "der"
            }
        };

        return forms[grammaticalCase][gender];
    }


    /* Indefinite article */

    if (article === "Indefinite article") {

        /*
           German has no indefinite article for plural.
        */

        if (gender === "pl") {
            return "";
        }

        const forms = {

            nominative: {
                m: "ein",
                f: "eine",
                n: "ein"
            },

            accusative: {
                m: "einen",
                f: "eine",
                n: "ein"
            },

            dative: {
                m: "einem",
                f: "einer",
                n: "einem"
            },

            genitive: {
                m: "eines",
                f: "einer",
                n: "eines"
            }
        };

        return forms[grammaticalCase][gender];
    }


    /* Possessive articles */

    const possessives = {

        mein: {

            nominative: {
                m: "mein",
                f: "meine",
                n: "mein",
                pl: "meine"
            },

            accusative: {
                m: "meinen",
                f: "meine",
                n: "mein",
                pl: "meine"
            },

            dative: {
                m: "meinem",
                f: "meiner",
                n: "meinem",
                pl: "meinen"
            },

            genitive: {
                m: "meines",
                f: "meiner",
                n: "meines",
                pl: "meiner"
            }
        },


        ihr: {

            nominative: {
                m: "ihr",
                f: "ihre",
                n: "ihr",
                pl: "ihre"
            },

            accusative: {
                m: "ihren",
                f: "ihre",
                n: "ihr",
                pl: "ihre"
            },

            dative: {
                m: "ihrem",
                f: "ihrer",
                n: "ihrem",
                pl: "ihren"
            },

            genitive: {
                m: "ihres",
                f: "ihrer",
                n: "ihres",
                pl: "ihrer"
            }
        },


        unser: {

            nominative: {
                m: "unser",
                f: "unsere",
                n: "unser",
                pl: "unsere"
            },

            accusative: {
                m: "unseren",
                f: "unsere",
                n: "unser",
                pl: "unsere"
            },

            dative: {
                m: "unserem",
                f: "unserer",
                n: "unserem",
                pl: "unseren"
            },

            genitive: {
                m: "unseres",
                f: "unserer",
                n: "unseres",
                pl: "unserer"
            }
        },


        euer: {

            nominative: {
                m: "euer",
                f: "eure",
                n: "euer",
                pl: "eure"
            },

            accusative: {
                m: "euren",
                f: "eure",
                n: "euer",
                pl: "eure"
            },

            dative: {
                m: "eurem",
                f: "eurer",
                n: "eurem",
                pl: "euren"
            },

            genitive: {
                m: "eures",
                f: "eurer",
                n: "eures",
                pl: "eurer"
            }
        }
    };


    return possessives[article][grammaticalCase][gender];
}


/* =========================================================
   ADJECTIVE DECLENSION
   ========================================================= */

function declineAdjective(
    article,
    gender,
    grammaticalCase
) {

    /*
       No article
       = strong adjective declension
    */

    if (article === "No article") {

        const endings = {

            nominative: {
                m: "er",
                f: "e",
                n: "es",
                pl: "e"
            },

            accusative: {
                m: "en",
                f: "e",
                n: "es",
                pl: "e"
            },

            dative: {
                m: "em",
                f: "er",
                n: "em",
                pl: "en"
            },

            genitive: {
                m: "en",
                f: "er",
                n: "en",
                pl: "er"
            }
        };

        return endings[grammaticalCase][gender];
    }


    /*
       Definite article
       = weak adjective declension
    */

    if (article === "Definite article") {

        const endings = {

            nominative: {
                m: "e",
                f: "e",
                n: "e",
                pl: "en"
            },

            accusative: {
                m: "en",
                f: "e",
                n: "e",
                pl: "en"
            },

            dative: {
                m: "en",
                f: "en",
                n: "en",
                pl: "en"
            },

            genitive: {
                m: "en",
                f: "en",
                n: "en",
                pl: "en"
            }
        };

        return endings[grammaticalCase][gender];
    }


    /*
       Indefinite article
       and possessive articles
       = mixed adjective declension
    */

    const endings = {

        nominative: {
            m: "er",
            f: "e",
            n: "es",
            pl: "e"
        },

        accusative: {
            m: "en",
            f: "e",
            n: "es",
            pl: "e"
        },

        dative: {
            m: "en",
            f: "en",
            n: "en",
            pl: "en"
        },

        genitive: {
            m: "en",
            f: "en",
            n: "en",
            pl: "en"
        }
    };

    return endings[grammaticalCase][gender];
}


/* =========================================================
   NOUN DECLENSION
   ========================================================= */

function declineNoun(noun, gender, grammaticalCase) {

    /*
       Weak masculine nouns

       Junge:
       Akkusativ -> Jungen
       Dativ     -> Jungen
       Genitiv   -> Jungen

       Student:
       Akkusativ -> Studenten
       Dativ     -> Studenten
       Genitiv   -> Studenten
    */

    const weakMasculineNouns = [
        "Junge",
        "Student"
    ];


    if (
        gender === "m" &&
        weakMasculineNouns.includes(noun) &&
        grammaticalCase !== "nominative"
    ) {
        return noun + "n";
    }


    /*
       Dative plural

       Add -n unless the plural already ends in -n or -s.
    */

    if (gender === "pl" && grammaticalCase === "dative") {

        if (
            noun.endsWith("n") ||
            noun.endsWith("s")
        ) {
            return noun;
        }

        return noun + "n";
    }


    return noun;
}


/* =========================================================
   BUILD THE ANSWER
   ========================================================= */

function buildAnswer() {

    const sentence = currentProblem.sentence.text;

    const grammaticalCase =
        currentProblem.sentence.case;

    const article =
        currentProblem.article;

    const adjective =
        currentProblem.adjective;

    const nounInfo =
        parseNoun(currentProblem.noun);

    const gender =
        nounInfo.gender;

    const noun =
        nounInfo.word;


    /* Get declined article */

    const articleForm =
        declineArticle(
            article,
            gender,
            grammaticalCase
        );


    /* Get adjective ending */

    const adjectiveEnding =
        declineAdjective(
            article,
            gender,
            grammaticalCase
        );


    const adjectiveForm =
        adjective + adjectiveEnding;


    /* Decline noun if necessary */

    const nounForm =
        declineNoun(
            noun,
            gender,
            grammaticalCase
        );


    /* Build noun phrase */

    const parts = [];

    if (articleForm !== "") {
        parts.push(articleForm);
    }

    parts.push(adjectiveForm);
    parts.push(nounForm);


    const nounPhrase =
        parts.join(" ");


    /* Insert noun phrase into sentence */

    return sentence.replace(
        /\(\s*[^)]*\s*\)/,
        nounPhrase
    );
}


/* =========================================================
   GENERATE NEW PROBLEM
   ========================================================= */

function generateProblem() {

    currentProblem = {

        sentence: randomItem(sentences),

        article: randomItem(articles),

        adjective: randomItem(adjectives),

        noun: randomItem(nouns)
    };


    document.getElementById("sentence").textContent =
        currentProblem.sentence.text;

    document.getElementById("article").textContent =
        currentProblem.article;

    document.getElementById("adjective").textContent =
        currentProblem.adjective;

    document.getElementById("noun").textContent =
        currentProblem.noun;


    /* Hide previous answer */

    document.getElementById("answerSection")
        .classList.add("hidden");
}


/* =========================================================
   SHOW ANSWER
   ========================================================= */

document.getElementById("showAnswer")
    .addEventListener("click", function () {

        document.getElementById("answer").textContent =
            buildAnswer();

        document.getElementById("answerSection")
            .classList.remove("hidden");
    });


/* =========================================================
   NEW PROBLEM BUTTON
   ========================================================= */

document.getElementById("newProblem")
    .addEventListener(
        "click",
        generateProblem
    );


/* =========================================================
   INITIAL PROBLEM
   ========================================================= */

generateProblem();
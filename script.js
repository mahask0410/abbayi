/* =====================================
   EASY EDIT SECTION
===================================== */

const YOUR_NAME = "Praveen";

const LETTER_DATE = "17 September 2026";


/* =====================================
   PHOTOS
===================================== */

const photos = [

    {
        image: "photos/photo1.jpeg",
        caption: "Chinna Packet"
    },

    {
        image: "photos/photo2.jpeg",
        caption: "Nuvvena ra idhi, entha amayakanga unnavo"
    },

    {
        image: "photos/photo3.jpeg",
        caption: "Bhanee"
    },

    {
        image: "photos/photo4.jpeg",
        caption: "Heeeee"
    }

];


/* =====================================
   LETTER
===================================== */

const LETTER = `Dear Abbayi garu,

Puttina roju subhakanshalu.

I don't know how to properly start this letter,

so I thought I would just write whatever comes to my mind.

Ippudu actual letter ikkada raayali.

Nee own context ni ikkada paste cheyyachu.

Every new line will appear one by one.

Take your time and read it slowly.

Once again,

Puttina Roju Subhakanshalu Abbayi.`;


/* =====================================
   PAGE NAVIGATION
===================================== */

let currentPhoto = 0;

let currentPage = "page1";


function showPage(pageId, addHistory = true) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document
        .getElementById(pageId)
        .classList.add("active");

    currentPage = pageId;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (addHistory) {

        history.pushState(
            { page: pageId },
            "",
            "#" + pageId
        );

    }

}


/* =====================================
   PAGE 1
===================================== */

function chooseLetter() {

    currentPhoto = 0;

    showPage("page2");

    loadPhoto();

}


/* =====================================
   ACCESSORIES
===================================== */

function chooseAccessories() {

    document
        .getElementById("accessoryPopup")
        .classList.add("show");

}


function closeAccessoryPopup() {

    document
        .getElementById("accessoryPopup")
        .classList.remove("show");

    currentPhoto = 0;

    showPage("page2");

    loadPhoto();

}


/* =====================================
   PHOTO FUNCTIONS
===================================== */

function loadPhoto() {

    const image =
        document.getElementById("currentPhoto");

    const caption =
        document.getElementById("photoCaption");

    image.style.opacity = "0";

    setTimeout(function () {

        image.src = photos[currentPhoto].image;

        caption.innerText =
            photos[currentPhoto].caption;

        image.style.opacity = "1";

    }, 120);

}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        showPage("page3");

        return;
    }

    loadPhoto();

}


/* =====================================
   LETTER
===================================== */

function openLetter() {

    showPage("page4");

    document
        .querySelector(".letter-date")
        .innerText = LETTER_DATE;

    document
        .querySelector(".letter-ending span")
        .innerText = YOUR_NAME;

    startLetterTyping();

}


function startLetterTyping() {

    const container =
        document.getElementById("letterText");

    const ending =
        document.getElementById("letterEnding");

    container.innerHTML = "";

    ending.style.display = "none";

    const lines = LETTER.split("\n");

    let lineNumber = 0;


    function showNextLine() {

        if (lineNumber >= lines.length) {

            setTimeout(function () {

                ending.style.display = "block";

            }, 500);

            return;
        }


        const line =
            document.createElement("div");

        line.className = "letter-line";


        if (lines[lineNumber].trim() === "") {

            line.innerHTML = "&nbsp;";

        } else {

            line.innerText =
                lines[lineNumber];

        }


        container.appendChild(line);

        lineNumber++;


        /* Faster than before:
           900ms → 500ms */

        setTimeout(showNextLine, 500);

    }


    showNextLine();

}


/* =====================================
   BACK BUTTON
===================================== */

function goBack() {

    history.back();

}


/* =====================================
   BROWSER BACK BUTTON
===================================== */

window.addEventListener("popstate", function (event) {

    if (event.state && event.state.page) {

        showPage(event.state.page, false);

        if (event.state.page === "page2") {

            currentPhoto = 0;

            loadPhoto();

        }

    } else {

        showPage("page1", false);

    }

});


/* =====================================
   INITIAL PAGE
===================================== */

window.addEventListener("load", function () {

    history.replaceState(
        { page: "page1" },
        "",
        "#page1"
    );

});

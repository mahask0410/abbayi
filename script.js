// ================================
// EASY EDIT SECTION
// ================================

const YOUR_NAME = "Praveen";
const LETTER_DATE = "17 September 2026";

const photos = [
    { image: "photos/photo1.jpeg", caption: "Chinna Packet" },
    { image: "photos/photo2.jpeg", caption: "Nuvvena ra idi,entha amayakanga unnavo" },
    { image: "photos/photo3.jpeg", caption: "Bhanee" },
    { image: "photos/photo4.jpeg", caption: "Heeeeee" }
];

// Replace the text below with your own Telugu + English letter.
// Keep each new line on a separate line.

const LETTER = `Dear Abbayi garu,

Puttina roju subhakanshalu.

I don't know how to properly start this letter,
so I thought I would just write whatever comes to my mind.

[YOUR FIRST PARAGRAPH HERE]

[YOUR SECOND PARAGRAPH HERE]

There are some things which are easier to write
than to say.

So I thought this little letter
would be the right way to tell you.

[CONTINUE YOUR LETTER HERE]

I hope you have a beautiful birthday
and an even more beautiful year ahead.

Take care.

And once again,
Puttina Roju Subhakanshalu Abbayi.`;

// ================================
// WEBSITE FUNCTIONS
// ================================

let currentPhoto = 0;

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
    window.scrollTo(0, 0);
}

function chooseLetter() {
    goToPhotos();
}

function chooseAccessories() {
    document.getElementById("accessoryPopup").classList.add("show");
}

function goToPhotos() {
    document.getElementById("accessoryPopup").classList.remove("show");

    currentPhoto = 0;

    document.getElementById("currentPhoto").src = photos[0].image;
    document.getElementById("photoCaption").innerText = photos[0].caption;

    showPage("page2");
}

function nextPhoto() {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        showPage("page3");
        return;
    }

    const image = document.getElementById("currentPhoto");

    image.style.animation = "none";
    void image.offsetWidth;

    image.src = photos[currentPhoto].image;
    image.style.animation = "photoChange 0.8s ease";

    document.getElementById("photoCaption").innerText =
        photos[currentPhoto].caption;
}

function openLetter() {
    showPage("page4");

    document.querySelector(".letter-date").innerText = LETTER_DATE;
    document.querySelector(".letter-ending span").innerText = YOUR_NAME;

    startLetterTyping();
}

function startLetterTyping() {
    const container = document.getElementById("letterText");

    container.innerHTML = "";

    const lines = LETTER.split("\n");
    let lineNumber = 0;

    function showNextLine() {
        if (lineNumber >= lines.length) {
            setTimeout(function() {
                document.getElementById("letterEnding").style.display = "block";
            }, 800);

            return;
        }

        const line = document.createElement("div");
        line.className = "letter-line";

        if (lines[lineNumber].trim() === "") {
            line.innerHTML = "&nbsp;";
        } else {
            line.innerText = lines[lineNumber];
        }

        container.appendChild(line);

        lineNumber++;

        setTimeout(showNextLine, 900);
    }

    showNextLine();
}

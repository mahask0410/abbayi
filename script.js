/* =====================================
   EASY EDIT SECTION
===================================== */

const YOUR_NAME = "𝗇̶𝗂̶𝗂̶𝗂̶𝗂̶ Maalakshmi";

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
        caption: "pilaka bhavundhi mastaruu"
    },

    {
        image: "photos/photo4.jpeg",
        caption: "oka gadidha ni kavali ani marii kori thechukunna "
    }

];


/* =====================================
   LETTER
===================================== */

const LETTER = `Oye...,

Bayapadaku propose cheyanu le

Hmm, ela start cheyalii.. Emani cheppali...

9 months ayipothundhi mana parichayaniki..
From stranger to nethranandam and to naku nachina first abbayi..

One of my friends asked me "Asalu relationships vadhu anukunnav, 
ee abbayi tho marraiage antunnav,antha thakkuva time lo ala ela decide ayipoyav " ani.

Vallaki ela cheppedhi parichayam kontha kaalame ayina chala connect ayipoya ani..
Nitho life baguntadhi ani anipinchindi

Kanii nitho travel chesekodhi mana iddariki set avuthundha ane question mark?

Like nuv logical ga untaav,nenu emotional ga unta..
niku drama nachadu,nachina abbayi daggara normal ga ela untaam cheppu
Naku jealousy ekkuva, na husband nunchi attention,love kavali naku
Even nakanna ma kuthurni ekkuva premisthe feel avtha emo

Ila evo konni vishyallo anipinchindii
Niku kuda anipinche untadhi ga

Every coin has two sides,nenu chaala manchidanni anukoku,assalu kaadhu

I still want to travel with you...
Nuv vellipovali anukunte eppudaina vellipovachu,nenu aapanu..
Kalisi undali ante okarikosam okaru konni marpulu cheskovalsi vasthe..
nenu ready ne.

Happy birthday 
I HATE YOU PRAVEEN

Ni dreams anni nijam avvali ani korukuntunna
Next year idhe time ki niku nachindi chesthu undali.. Either Mtech or Job
Bhaga chaduvuko,Gate rank kottu
I know you can,you has that capability
Take care of your health abbayi

Rey Gadidha english correct chesthe champutha

Ippudu ee letter ki reply isthavo ledho kuda thelidhu
naku thelusu nuvvem antavo
reply expect cheyaku antaav


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
  const image = document.getElementById("currentPhoto");
  const caption = document.getElementById("photoCaption");

  image.style.opacity = "0";

  setTimeout(function () {
    image.src = photos[currentPhoto].image;
    caption.innerText = photos[currentPhoto].caption;

    image.onload = function () {
      image.style.opacity = "1";
    };
  }, 150);
}

function nextPhoto() {
  currentPhoto = currentPhoto + 1;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
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

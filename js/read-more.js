const readMoreLinkBorehole = document.getElementById("read-more-borehole");
const longTextBorehole = document.getElementById("long-text-borehole");

const readMoreLinkDiamond = document.getElementById("read-more-diamond");
const longTextDiamond = document.getElementById("long-text-diamond");

const readMoreLinkHaul = document.getElementById("read-more-haul");
const longTextHaul = document.getElementById("long-text-haul");

const readMoreLinkRevCirc = document.getElementById("read-more-revcirc");
const longTextRevCirc = document.getElementById("long-text-revcirc");

const readMoreLinkBlast = document.getElementById("read-more-blast");
const longTextBlast = document.getElementById("long-text-blast");




function toggleText(readMoreLink, longText) {
    if (longText.style.display === "none") {
      longText.style.display = "block";
      longText.style.maxHeight = longText.scrollHeight + "px";
      readMoreLink.textContent = "Read Less";
    } else {
      longText.style.maxHeight = "1px";
      setTimeout(function() {
        longText.style.display = "none";
      }, 10);
      readMoreLink.textContent = "Read More";
    }
  }

  readMoreLinkBorehole.addEventListener("click", function() {
    toggleText(readMoreLinkBorehole, longTextBorehole);
    // Hide longText2 if it's currently visible
    if (longTextDiamond.style.display !== "none") {
      toggleText(readMoreLinkDiamond, longTextDiamond);
    }

    if (longTextHaul.style.display !== "none") {
        toggleText(readMoreLinkHaul, longTextHaul);
      }

    if (longTextRevCirc.style.display !== "none") {
        toggleText(readMoreLinkRevCirc, longTextRevCirc);
      }

    if (longTextBlast.style.display !== "none") {
        toggleText(readMoreLinkBlast, longTextBlast);
      }
  });

  readMoreLinkDiamond.addEventListener("click", function() {
    toggleText(readMoreLinkDiamond, longTextDiamond);
    // Hide longText1 if it's currently visible
    if (longTextBorehole.style.display !== "none") {
      toggleText(readMoreLinkBorehole, longTextBorehole);
    }

    if (longTextHaul.style.display !== "none") {
        toggleText(readMoreLinkHaul, longTextHaul);
      }

    if (longTextRevCirc.style.display !== "none") {
        toggleText(readMoreLinkRevCirc, longTextRevCirc);
      }

    if (longTextBlast.style.display !== "none") {
        toggleText(readMoreLinkBlast, longTextBlast);
      }
  });
  
 readMoreLinkHaul.addEventListener("click", function() {
    toggleText(readMoreLinkHaul, longTextHaul);
    // Hide longText1 if it's currently visible
    if (longTextBorehole.style.display !== "none") {
      toggleText(readMoreLinkBorehole, longTextBorehole);
    }
    
    if (longTextDiamond.style.display !== "none") {
        toggleText(readMoreLinkDiamond, longTextDiamond);
      }

    if (longTextRevCirc.style.display !== "none") {
        toggleText(readMoreLinkRevCirc, longTextRevCirc);
      }

    if (longTextBlast.style.display !== "none") {
        toggleText(readMoreLinkBlast, longTextBlast);
      }
  });

  readMoreLinkRevCirc.addEventListener("click", function() {
    toggleText(readMoreLinkRevCirc, longTextRevCirc);
    // Hide longText1 if it's currently visible
    if (longTextBorehole.style.display !== "none") {
      toggleText(readMoreLinkBorehole, longTextBorehole);
    }
    
    if (longTextDiamond.style.display !== "none") {
        toggleText(readMoreLinkDiamond, longTextDiamond);
      }

    if (longTextHaul.style.display !== "none") {
        toggleText(readMoreLinkHaul, longTextHaul);
      }

    if (longTextBlast.style.display !== "none") {
        toggleText(readMoreLinkBlast, longTextBlast);
      }
  });

  readMoreLinkBlast.addEventListener("click", function() {
    toggleText(readMoreLinkBlast, longTextBlast);
    // Hide longText1 if it's currently visible
    if (longTextBorehole.style.display !== "none") {
      toggleText(readMoreLinkBorehole, longTextBorehole);
    }
    
    if (longTextDiamond.style.display !== "none") {
        toggleText(readMoreLinkDiamond, longTextDiamond);
      }

    if (longTextHaul.style.display !== "none") {
        toggleText(readMoreLinkHaul, longTextHaul);
      }

    if (longTextRevCirc.style.display !== "none") {
        toggleText(readMoreLinkRevCirc, longTextRevCirc);
      }
  });
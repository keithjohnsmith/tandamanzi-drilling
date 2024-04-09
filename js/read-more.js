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
      readMoreLink.style.color = "rgb(255,102,0)";
    } else {
      longText.style.maxHeight = "1px";
      setTimeout(function() {
        longText.style.display = "none";
      }, 10);
      readMoreLink.textContent = "Read More";
      readMoreLink.style.color = "#515151";
    }
  }

  readMoreLinkBorehole.addEventListener("click", function() {
    toggleText(readMoreLinkBorehole, longTextBorehole);
    event.preventDefault();
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
    event.preventDefault();
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
    event.preventDefault();
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
    event.preventDefault();
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
    event.preventDefault();
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
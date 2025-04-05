document.addEventListener("DOMContentLoaded", function () { // Tell DOM to wait until until HTML loads before running function. 
    const titles = [ //array of all the titles 
      "Software Engineer",
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Scientist"
    ];
  
    let index = 0; // track title being shown in array
    const textEl = document.getElementById("rotating-text");
  
    function rotateText() {
      textEl.textContent = `I'm a ${titles[index]}.`;
      index++ // add one to show a title one at a time.
      if (index === titles.length) {
        index = 0;  // reset index since it'll be at the end of the list.
      }
    }
  
    rotateText();
    setInterval(rotateText, 2500); // switch titles every 2.5 seconds
  });
  
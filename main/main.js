function loadDynamicFonts() {
  const head = document.getElementsByTagName("head")[0];
  const fontslist = [];

  const tags = [
    "a",
    "p",
    "div",
    "span",
    "li",
    "button",
    "input",
    "label",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "form",
  ];

  tags.forEach((tag) => {
    let allclass = document.querySelectorAll(tag);

    for (let i = 0; i < allclass.length; i++) {
      let singleClass = allclass[i];

      if (singleClass.className.includes("brahmastra-")) {
        let font = singleClass.classList;
        let font1 = null;
        let fontsize = null;
        font.forEach((i) => {
          if (i.split("-")[0] === "brahmastra") {
            font1 = i.split("-")[1];
            fontsize = i.split("-")[2];
          }
        });

        if (!fontslist.includes(font1)) {
          fontslist.push(font1);
          let link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = `https://fonts.googleapis.com/css2?family=${font1.replace(/ /g, "+")}&display=swap`;
          head.appendChild(link);
        }
        singleClass.style.fontFamily = font1;
        singleClass.style.fontSize = (fontsize || "16") + "px";
      }
    }
  });
}

loadDynamicFonts();

window.loadDynamicFonts = loadDynamicFonts;

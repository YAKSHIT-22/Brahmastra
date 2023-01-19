const head = document.getElementsByTagName("HEAD")[0];
    const tag = [
      "a",
      "p",
      "div",
      "span",
      "li",
      "button",
      "input",
      "lable",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "form",
    ];
    const fontslist = [];

    window.addEventListener("load", () => {
      tag.forEach((tag) => {
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
              console.log(fontslist);
              let link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = `https://fonts.googleapis.com/css2?family=${font1}&display=swap`;
              head.appendChild(link);
              console.log(link);
            }
            singleClass.style.fontFamily = font1.replaceAll("+", " ");
            singleClass.style.fontSize = (fontsize || "16") + "px";
          }
        }
      });
    });

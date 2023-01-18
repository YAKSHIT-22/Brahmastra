const head = document.getElementsByTagName("HEAD")[0];
const tagList = [
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
  "form"
];
const fontslist = [];
window.addEventListener("load", () => {
  tagList.forEach((tag) => {
    let allclass = document.querySelectorAll(tag);
    for (let i = 0; i < allclass.length; i++) {
      let singleClass = allclass[i];
      if (singleClass.className.includes("brahmastra-")) {
        let font = singleClass.className.split("-")[1];
        let fontsize = singleClass.className.split("-")[2];
        if (!fontslist.includes(font)) {
            fontslist.push(font);
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
            head.appendChild(link);
        }
        singleClass.style.fontFamily = font.replaceAll("+", " ");
        singleClass.style.fontSize = (fontsize || "16") + "px";
      }
    }
  });
});

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
];
window.addEventListener("load", () => {
  tagList.forEach((tag) => {
    let allclass = document.querySelectorAll(tag);
    for (let i = 0; i < allclass.length; i++) {
      let singleClass = allclass[i];
      let font = singleClass.className.split("-")[1];
      let fontsize = singleClass.className.split("-")[2];
      if (singleClass.className.includes("brahmastra-")) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `https://fonts.googleapis.com/css?family=${font}`;
        head.appendChild(link);
        singleClass.style.fontFamily = font.replaceAll("+", " ");
        singleClass.style.fontSize = (fontsize || "16") + "px";
      }
    }
  });
});

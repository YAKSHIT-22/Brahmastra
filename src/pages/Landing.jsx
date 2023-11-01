import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const codeString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#000000">
  <title>Your React App</title>
  <script src="https://cdn.jsdelivr.net/gh/YAKSHIT-22/Brahmastra@main/main/main.js"></script>
</head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
</body>
</html>
`;
const codeString1 = `import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Call the function from the CDN script to load/update fonts
    if (window.loadDynamicFonts) {
      window.loadDynamicFonts();
    }
  }, []);

  return (
    <div className="App">
      {/* Your JSX */}
    </div>
  );
}

export default App;
`
const codeString2 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Simple HTML/CSS Website</title>
  <!-- Include the CDN-hosted script that defines loadDynamicFonts -->
  <script src="https://cdn.jsdelivr.net/gh/YAKSHIT-22/Brahmastra@main/main/main.js"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="brahmastra-MyFont">This is a sample text.</div>
  <!-- Other HTML content -->
  <script>
    // Call loadDynamicFonts to apply fonts when the window loads
    window.addEventListener("load", function () {
      if (window.loadDynamicFonts) {
        window.loadDynamicFonts();
      }
    });
  </script>
</body>
</html>
`
export default function Landing() {
  const [className, setClassName] = React.useState({
    name: "brahmastra-Urbanist",
  });
  const { name } = className;
  function onChange(e) {
    if (e.target.value.split("-")[2] > "32") {
      toast.warn("Font size greater than 32px cant be demonstrated here!");
      return;
    }
    setClassName((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }
  useEffect(() => {
    if (window.loadDynamicFonts) {
      window.loadDynamicFonts();
    }
  });
  return (
    <>
      <div className="absolute inset-x-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-grid-slate-400/[0.05] dark:border-b border-slate-100/5 [mask-image:linear-gradient(to bottom, transparent, black)]"></div>
      <section className="w-screen h-full">
        <div className="relative max-w-6xl mx-auto pt-4 sm:pt-6 lg:pt-8 flex items-center justify-center flex-col gap-2">
          <h1 className="font-extrabold p-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white ">
            BRAHMASTRA
          </h1>
          <h2 className="font-extrabold p-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center text-white">
            A Font-style applyer made to add fontstyle by just putting class
            name in class attributes.
          </h2>
          <p className="text-lg brahmastra-Urbanist-18 p-4 text-center max-w-3xl mx-auto text-slate-400">
            A font-applyer framework packed with google fonts like{" "}
            <code className="font-medium text-sky-500 dark:text-sky-400">
              Poppins
            </code>
            ,{" "}
            <code className="font-medium text-sky-500 dark:text-sky-400">
              Inter
            </code>
            ,{" "}
            <code className="font-medium text-sky-500 dark:text-sky-400">
              Urbanist
            </code>
            ,{" "}
            <code className="font-medium text-sky-500 dark:text-sky-400">
              Lato etc
            </code>{" "}
            that can be composed to use any font, directly from your class
            attribute.
          </p>
          <div className="w-full flex items-center justify-center md:flex-row flex-col mt-2  mb-12 gap-4 mx-auto mt-8 h-full p-2 md:p-2">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <form className="w-full flex items-start justify-center flex-col gap-4">
                <p className="brahmastra-Urbanist-14 w-full text-white transition-all">
                  Add this to class attribute. Can change it for Demonstration!
                </p>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={onChange}
                  className="brahmastra-Urbanist-18 p-4 w-full h-14 bg-[#0b2035] border rounded border-[#164040] text-white text-center transition-all outline-none"
                />
              </form>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div
                className={`${name} w-full h-full md:mt-9 bg-[#0b2035] text-white p-4 rounded border border-[#164040] transition-all duration-1000 origin-center text-center`}>
                <span className="text-[#ca619b]">{"<"}</span>
                <span className="text-[#ca619b]">{"div"}</span>
                <span className="text-[#ca619b]">{">"}</span> HELLO WORLD!!{" "}
                <span className="text-[#ca619b]">{"<"}</span>
                <span className="text-[#ca619b]">{"/div"}</span>
                <span className="text-[#ca619b]">{">"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-full p-2 md:p-2 mb-4">
        <div className="max-w-6xl mx-auto pt-4 sm:pt-6 lg:pt-8 flex items-center justify-center flex-col gap-[2rem]">
          <h1 className="font-extrabold p-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center text-white ">
            1. React Usage
          </h1>
          <div className="w-full h-full flex items-start justify-start flex-col gap-[1rem]">
            <div className="w-full h-full flex items-start justify-start md:flex-row flex-col gap-[2rem]">
             <div className="w-full md:w-[50%] h-full flex items-start justify-start flex-col gap-2">
              <h1 className="brahmastra-Urbanist text-white !text-xl">
                1. Brahmastra Font Loader Integration
              </h1>
              <p className="brahmastra-Urbanist text-slate-200 !text-base">
              In the React project, include the Dynamic Font Loader script in the HTML file (public/index.html). Ensure the script tag is placed in the <span className="text-[#ca619b]"> &lt;head&gt;</span> section or just before the closing <span className="text-[#ca619b]"> &lt;/body&gt;</span> tag.
              </p>
              </div> 
              <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="!bg-inherit border-[.1px] w-full md:w-[50%] border-[#1c3e60] h-full rounded-md scroll-remove">
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full h-full flex items-start justify-start flex-col gap-[1rem]">
            <div className="w-full h-full flex items-start justify-start md:flex-row flex-col gap-[2rem]">
             <div className="w-full md:w-[50%] h-full flex items-start justify-start flex-col gap-2">
              <h1 className="brahmastra-Urbanist text-white !text-xl">
                2. Using Dynamic Fonts in a React Component
              </h1>
              <p className="brahmastra-Urbanist text-slate-200 !text-base">
              In this React code snippet, we demonstrate how to integrate and apply dynamic fonts in a React application. The useEffect hook is employed to call a function from an external CDN-hosted script, which dynamically loads and updates fonts on component mounting.<br/> <span className="text-[#ca619b]">To always run the script on re-render use the useEffect without dependency array.</span>
              </p>
              </div> 
              <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="!bg-inherit border-[.1px] w-full md:w-[50%] border-[#1c3e60]  h-full rounded-md scroll-remove">
                {codeString1}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full h-full flex items-start justify-start flex-col gap-[1rem]">
            <div className="w-full h-full flex items-start justify-start md:flex-row flex-col gap-[2rem]">
             <div className="w-full md:w-[50%] h-full flex items-start justify-start flex-col gap-2">
              <h1 className="brahmastra-Urbanist text-white !text-xl">
              3. Running the React Application
              </h1>
              <p className="brahmastra-Urbanist text-slate-200 !text-base">
              Start your React application with npm start or your preferred development script. The dynamic fonts will be applied when the component mounts.
              </p>
              </div> 
            </div>
          </div>
        </div>
      
      </section>
      <section className="w-screen h-full p-2 md:p-2 mb-4">

        <div className="max-w-6xl mx-auto pt-4 sm:pt-6 lg:pt-8 flex items-center justify-center flex-col gap-[2rem]">
          <h1 className="font-extrabold p-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center text-white ">
            2. Native HTML CSS Usage
          </h1>
          <div className="w-full h-full flex items-start justify-start flex-col gap-[1rem]">
            <div className="w-full h-full flex items-start justify-start md:flex-row flex-col gap-[2rem]">
             <div className="w-full md:w-[50%] h-full flex items-start justify-start flex-col gap-2">
              <h1 className="brahmastra-Urbanist text-white !text-xl">
                1. HTML Setup
              </h1>
              <p className="brahmastra-Urbanist text-slate-200 !text-base">
              Create an HTML file and include the following structure. Add CDN link using script tag in <span className="text-[#ca619b]"> &lt;head&gt;</span> and call it in other script tag with load eventlistener to apply font changes on refresh or reload. Add the class name to the element you want to apply the font to and Done! 
              </p>
              </div> 
              <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="!bg-inherit border-[.1px] w-full md:w-[50%] border-[#1c3e60] h-full rounded-md scroll-remove">
                {codeString2}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      
      </section>
      <div className="absolute inset-x-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-grid-slate-400/[0.05] dark:border-b border-slate-100/5 [mask-image:linear-gradient(to top, transparent, black)]"></div>
    </>
  );
}

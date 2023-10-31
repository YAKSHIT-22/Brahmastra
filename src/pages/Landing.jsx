import React, {useEffect} from "react";

export default function Landing() {
  const [className, setClassName] = React.useState({
    name: "brahmastra-Montserrat",
  });
  const { name } = className;
  function onChange(e) {
    setClassName((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));    
  }
  useEffect(() => {
    // Call the function from the CDN script to load/update fonts
    if (window.loadDynamicFonts) {
      window.loadDynamicFonts();
    }
  }, []);
  return (
    <React.Fragment>
      <div className="absolute inset-x-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-grid-slate-400/[0.05] bg-bottom dark:border-b border-slate-100/5 [mask-image:linear-gradient(to bottom, transparent, black)]"></div>
      <section className="w-screen h-full">
        <div className="relative max-w-5xl mx-auto pt-4 sm:pt-6 lg:pt-8 flex items-center justify-center flex-col gap-2">
          <h1 className="font-extrabold p-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white ">
            BRAHMASTRA
          </h1>
          <h2 className="font-extrabold p-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center text-white">
            A Font-style applyer made to add fontstyle by just putting class
            name in class attributes.
          </h2>
          <p className="text-lg brahmastra-Montserrat-18 p-4 text-center max-w-3xl mx-auto text-slate-400">
            A font-applyer framework packed with google fonts like{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              Poppins
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              Inter
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              Montserrat
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              Lato etc
            </code>{" "}
            that can be composed to use any font, directly from your class
            attribute.
          </p>
          <div className="w-full flex items-center justify-center md:flex-row flex-col mt-2  mb-12 gap-6 md:gap-6 mx-auto mt-8 h-full p-4 md:p-4">
            <div className="w-full md:w-1/2 flex items-center justify-center p-1">
              <form className="w-full flex items-center justify-center flex-col gap-4">
             <p className="brahmastra-Montserrat-14 w-full text-white transition-all" >Add this to class attribute!</p>
              <input type="text" id="name" value={name} onChange={onChange} className="brahmastra-Montserrat-18 p-4 w-full h-14 bg-[#0b2035] text-white transition-all border border-white" />
             </form>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className={`${name} w-full h-full md:mt-9 bg-[#0b2035] text-white p-5 rounded` }>
                   <span className="text-[#ca619b]">{"<"}</span><span className="text-[#ca619b]">{"div"}</span><span className="text-[#ca619b]">{">"}</span> HELLO WORLD!! <span className="text-[#ca619b]">{"<"}</span><span className="text-[#ca619b]">{"/div"}</span><span className="text-[#ca619b]">{">"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-x-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-grid-slate-400/[0.05] bg-bottom dark:border-b border-slate-100/5 [mask-image:linear-gradient(to top, transparent, black)]"></div>
    </React.Fragment>
  );
}

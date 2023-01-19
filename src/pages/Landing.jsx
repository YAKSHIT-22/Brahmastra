import React from 'react'

export default function Landing() {

  return (
    <React.Fragment>
    <div className="absolute inset-x-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-grid-slate-400/[0.05] bg-bottom dark:border-b border-slate-100/5 [mask-image:linear-gradient(to bottom, transparent, black)]"></div>
    <section className="w-screen h-screen">
      <div className="relative max-w-5xl mx-auto pt-4 sm:pt-6 lg:pt-8 flex items-center justify-center flex-col gap-4">
        <h1 className="font-extrabold p-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white ">BRAHMASTRA</h1>
      <h2 className="font-extrabold p-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center text-white">A Font-style applyer made to add fontstyle by just putting class name in class attributes.</h2>
      <p className="text-lg brahmastra-Montserrat-18 p-4 text-center max-w-3xl mx-auto text-slate-400">A font-applyer framework packed with google fonts like <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Poppins</code>, <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Inter</code>, <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Montserrat</code>, <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Lato etc</code> that can be composed to use any font, directly from your class attribute.</p>
      
      </div>
    </section>
    <div className="absolute inset-x-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-grid-slate-400/[0.05] bg-bottom dark:border-b border-slate-100/5 [mask-image:linear-gradient(to top, transparent, black)]"></div>
    </React.Fragment>
     );
  }
// import { useState } from "react";
// import Footer from "./components/Footer";

// // Simple single-page placeholder built with Tailwind CSS.
// // Drop this into src/App.tsx (replace existing file).

// const App: React.FC = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <header className="bg-white/60 dark:bg-gray-800/60 backdrop-blur sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-xl font-semibold">Deshmitra</h1>

//           <nav className="hidden md:flex gap-6 items-center text-sm">
//             <a href="#features" className="hover:underline">Features</a>
//             <a href="#pricing" className="hover:underline">Pricing</a>
//             <a href="#contact" className="hover:underline">Contact</a>
//           </nav>

//           <div className="md:hidden">
//             <button
//               onClick={() => setNavOpen((v) => !v)}
//               aria-label="Toggle menu"
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
//             >
//               {/* simple hamburger */}
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {navOpen && (
//           <div className="md:hidden px-6 pb-4">
//             <nav className="flex flex-col gap-2 text-sm">
//               <a href="#features" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Features</a>
//               <a href="#pricing" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Pricing</a>
//               <a href="#contact" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Main content */}
//       <main className="max-w-4xl mx-auto px-6 py-16">
//         {/* Hero */}
//         <section className="text-center">
//           <h2 className="text-3xl md:text-4xl font-bold">A simple Tailwind + React placeholder</h2>
//           <p className="mt-4 text-gray-600 dark:text-gray-300">A clean, responsive starting point for your project.</p>

//           <div className="mt-8 flex justify-center gap-4">
//             <a
//               href="#features"
//               className="px-6 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700"
//             >
//               Get started
//             </a>

//             <a href="#contact" className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">Contact us</a>
//           </div>
//         </section>

//         {/* Features */}
//         <section id="features" className="mt-16 grid gap-6 md:grid-cols-3">
//           <article className="p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur">
//             <h3 className="font-semibold">Fast setup</h3>
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Tailwind + Vite starter ready to go.</p>
//           </article>

//           <article className="p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur">
//             <h3 className="font-semibold">Responsive</h3>
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Works well on mobile, tablet, and desktop.</p>
//           </article>

//           <article className="p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur">
//             <h3 className="font-semibold">Accessible</h3>
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Semantic HTML and keyboard-friendly UI.</p>
//           </article>
//         </section>

//         {/* Placeholder area / CTA */}
//         <section id="pricing" className="mt-16 p-6 rounded-lg bg-linear-to-r from-white/60 to-gray-50 dark:from-gray-800/60 dark:to-gray-900/60">
//           <h3 className="text-lg font-medium">Placeholder section</h3>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Use this area to describe your product, pricing, or anything else.</p>

//           <div className="mt-6 grid gap-4 sm:grid-cols-2">
//             <div className="p-4 border rounded">Placeholder card 1</div>
//             <div className="p-4 border rounded">Placeholder card 2</div>
//           </div>
//         </section>

//         {/* Contact / simple form (non-functional placeholder) */}
//         <section id="contact" className="mt-16 p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur">
//           <h3 className="text-lg font-medium">Get in touch</h3>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">This is a UI placeholder for a contact form.</p>

//           <form className="mt-4 grid gap-3 sm:grid-cols-2">
//             <input className="p-2 border rounded" placeholder="Your name" />
//             <input className="p-2 border rounded" placeholder="Email" />
//             <textarea className="p-2 border rounded col-span-full" rows={4} placeholder="Message (placeholder)"></textarea>
//             <div className="col-span-full flex justify-end">
//               <button className="px-4 py-2 rounded bg-blue-600 text-white">Send</button>
//             </div>
//           </form>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="text-center py-6 text-sm text-gray-500">
//         © {new Date().getFullYear()} Deshmitra. Built with ❤️.
//       </footer>
//       <Footer />
//     </div>
//   );
// };

// export default App;


import Footer from "./components/Footer";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
    <div className="py-12 min-h-screen bg-red-400 mx-auto container">
      <section className="h-full w-full space-y-10">
        <Services />
        <Services />
        <Services />
        <Services />
      </section>
   
    </div>
       <Footer />
       </>
  );
};

export default App;

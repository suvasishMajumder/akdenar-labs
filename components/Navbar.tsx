"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// shadcn imports — adjust paths if your project uses different wrappers
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { navigationData } from "@/data/navigationData";

export default function Navbar() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");


  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-slate-100`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between h-16">
          {/* Logo + mobile menu trigger */}
          <div className="flex w-full md:w-auto items-center gap-4">
            <div className="items-center flex flex-1">
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={160}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Mobile sheet trigger */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="p-2 rounded-md hover:bg-gray-100 bg-white/0 shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </SheetTrigger>

                <SheetContent side="left" className="w-[320px] h-full overflow-y-auto p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center">
                      <Image src="/logo.svg" alt="Logo" width={140} height={36} />
                    </Link>
                    {/* <button
                      onClick={() => {
                        // sheet provides its own close, but keep for safety
                        const el = document.activeElement as HTMLElement;
                        el?.blur();
                      }}
                      className="p-2"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button> */}
                  </div>

                  <nav className="space-y-4" onClick={() => setIsSheetOpen(false)}>
                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="what-we-do">
                          <AccordionTrigger className="text-gray-700 hover:text-gray-900">What We Do</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              <details>
                                <summary className="font-medium text-gray-700">Capabilities</summary>
                                <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                                  {navigationData.capabilities.map((c) => (
                                    <li key={c}>
                                      <Link href={`/services/${slugify(c)}`} className="block text-gray-700 hover:text-gray-900">
                                        {c}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </details>

                              <details className="mt-2">
                                <summary className="font-medium text-gray-700">Industries</summary>
                                <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                                  {navigationData.industries.map((i) => (
                                    <li key={i}>
                                      <Link href={`/services/${slugify(i)}`} className="block text-gray-700 hover:text-gray-900">
                                        {i}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <Link href="/about" className={isActive("/about") ? "block font-semibold text-gray-900" : "block text-gray-700 hover:text-gray-900"} aria-current={isActive("/about") ? "page" : undefined}>
                      About
                    </Link>
                    <Link href="/projects" className={isActive("/projects") ? "block font-semibold text-gray-900" : "block text-gray-700 hover:text-gray-900"} aria-current={isActive("/projects") ? "page" : undefined}>
                      Projects
                    </Link>
                    <Link href="/career" className={isActive("/career") ? "block font-semibold text-gray-900" : "block text-gray-700 hover:text-gray-900"} aria-current={isActive("/career") ? "page" : undefined}>
                      Careers
                    </Link>

                    <div className="pt-4">
                      <Button className="w-full">Enquire Now</Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" onClick={() =>
            setMegaOpen(false)
          }>
            <div className="relative">
              <button
                onClick={(e) => {
                  setMegaOpen((s) => !s);
                  e.stopPropagation();
                }}
                className={`flex items-center gap-2 py-2 px-3 rounded-md ${megaOpen ? "bg-gray-100" : "hover:bg-gray-50"}`}
                aria-expanded={megaOpen}
              >
                <span className={`text-sm ${isActive("/services") ? "font-semibold" : "font-medium"}`}>
                  What We Do
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              {megaOpen && (
                <div
                  className={`absolute bg-white p-4 -left-100 2xl:-left-50 w-[80vw] 2xl:w-[60vw] mt-3 shadow-lg z-50 animate-dropdown `}>
                  <div className="grid grid-cols-2 gap-6"> {/* Changed from grid-cols-2 to grid-cols-1 */}
                    <div>
                      <h4 className="font-semibold mb-3 text-black">Capabilities</h4>
                      <ul className="grid grid-cols-2 gap-y-2 text-sm"> {/* Changed from grid-cols-2 to grid-cols-1 */}
                        {navigationData.capabilities.map((c) => (
                          <li key={c}>
                            <Link href={`/services/${slugify(c)}`} className="hover:underline text-gray-700 hover:text-gray-900">
                              {c}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Industries</h4>
                      <ul className="grid grid-cols-2 gap-y-2 text-sm">
                        {navigationData.industries.map((i) => (
                          <li key={i}>
                            <Link href={`/services/${slugify(i)}`} className="hover:underline text-gray-700 hover:text-gray-900">
                              {i}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={isActive("/about") ? "font-semibold text-primary" : "text-md text-gray-700 hover:text-gray-900"}>About</Link>
            <Link href="/projects" className={isActive("/projects") ? "font-semibold text-primary" : "text-md text-gray-700 hover:text-gray-900"}>Projects</Link>
            <Link href="/career" className={isActive("/career") ? "font-semibold text-primary" : "text-md text-gray-700 hover:text-gray-900"}>Careers</Link>
          </nav>

          {/* CTA on right */}
          <div className="hidden md:flex items-center">
            <Button className="text-white">Enquire Now</Button>
          </div>
        </div>
      </div >
    </header >
  );
}

/* simple slug helper */
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

"use client";
import Link from "next/link";
import Logo from "../public/ryukyukan_logo.png";
import { ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Branches", href: "/branches" },
  // { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = menuState ? "hidden" : "";
    document.documentElement.style.scrollBehavior = menuState ? "none" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background sticky z-20 w-full border-b"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img
                  src={Logo.src}
                  alt="Ryukyukan India Logo"
                  width={40}
                  height={40}
                />
                {/* <span className="font-medium text-lg">Ryukyukan India</span> */}
              </Link>

              <Button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -mr-4 -mt-2 block cursor-pointer p-2.5 lg:hidden text-white bg-transparent"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </Button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block in-data-[state=active]:h-screen lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap  items-center justify-end transition-transform duration-300 ease-in-out space-y-8 py-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {/* <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button> */}
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="gap-1 pr-2 shadow-none md:hidden"
                  onClick={() => {
                    setMenuState(!menuState);
                  }}
                >
                  <Link href="#enroll">
                    Book a Free Trial
                    <ChevronRight className="ml-0 size-3.5! opacity-50" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="gap-1 pr-2 shadow-none hidden md:flex"
                >
                  <Link href="#enroll">
                    Book a Free Trial
                    <ChevronRight className="ml-0 size-3.5! opacity-50" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

"use client";
import Link from "next/link";
import { ChevronRight, Menu, User2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const adminMenuItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Gallery", href: "/admin/gallery" },
];

export const AdminNavbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  React.useEffect(() => {
    document.body.style.overflow = menuState ? "hidden" : "";
    document.documentElement.style.scrollBehavior = menuState ? "none" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, [menuState]);

  const { session, signOut } = UserAuth();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signOut();
      if (result == undefined) {
        toast.success("You have been logged out successfully");
        router.replace("/admin/auth/login");
      }
    } catch (error) {
      console.error("Error while logging out", error);
      toast.error("Error while logging out");
    }

    setLoading(false);
  };

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
                  src="/logo.png"
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
                  <div className="hidden lg:block">
                    <ul className="flex gap-8 text-sm">
                      {adminMenuItems.map((item, index) => (
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
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block in-data-[state=active]:h-screen lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap  items-center justify-end transition-transform duration-300 ease-in-out space-y-8 py-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {adminMenuItems.map((item, index) => (
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
              <div className="flex w-full flex-col space-y-4 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <div className="flex gap-3 justify-start md:justify-center items-center divide-x-2">
                  <div className="pr-3">
                    <User2 size={20} />{" "}
                  </div>
                  <p>{session?.user?.email}</p>
                </div>
                <Button
                  asChild
                  variant="destructive"
                  size="lg"
                  className="px-5 text-base shadow-none md:hidden"
                  onClick={handleSubmit}
                >
                  <span>Sign Out</span>
                </Button>

                <Button
                  asChild
                  variant="destructive"
                  size="lg"
                  className="shadow-none cursor-pointer hidden md:flex"
                  onClick={handleSubmit}
                >
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

"use client";

import Link from "next/link";

export function Navbar() {
  const navItems = [
    "HOME",
    "TOP",
    "CATALOG",
    "CONTESTS",
    "GYM",
    "PROBLEMSET",
    "GROUPS",
    "RATING",
    "EDU",
    "API",
    "CALENDAR",
    "HELP",
  ];

  return (
    <nav className=" border-1 border-rounded border-black mb-6">
      <div className="grid grid-cols-11  mx-auto px-4">
        <div className=" col-span-6 gap-2 py-2 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-2 py-2 `}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="col-span-5"></div>
      </div>
    </nav>
  );
}

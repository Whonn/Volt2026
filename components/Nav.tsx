"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Coaches", href: "#coaches" },
  { label: "Membership", href: "#membership" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#top" className="font-display text-2xl tracking-tightest text-bone">
          VOLT<span className="text-volt">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="readout !text-mute hover:!text-volt transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#membership"
          className="hidden md:inline-flex items-center bg-volt text-ink font-display text-sm px-6 py-3 tracking-tight hover:bg-bone transition-colors"
        >
          Join Now
        </a>

        <button
          className="md:hidden text-bone"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-7 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-bone transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-bone transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="readout !text-mute"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#membership"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center bg-volt text-ink font-display text-sm px-6 py-3 mt-2"
          >
            Join Now
          </a>
        </div>
      )}
    </motion.header>
  );
}

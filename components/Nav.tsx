"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [{ label: "Work", href: "/#work" }, { label: "About", href: "/#about" }, { label: "Services", href: "/#services" }, { label: "Contact", href: "/#contact" }];
const email = "priyanshpal2004@gmail.com";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-12">
        <a href="/" className="text-lg font-black tracking-[-.09em]">PP<span className="text-ember">.</span></a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(link => <a key={link.label} href={link.href} className="text-[11px] uppercase tracking-[.16em] text-white/65 transition hover:text-white">{link.label}</a>)}
        </nav>
        <a href={`mailto:${email}`} className="hidden items-center gap-2 text-[10px] uppercase tracking-[.16em] md:flex">Let&apos;s talk <ArrowUpRight size={14} /></a>
        <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-ink md:hidden">
          <div className="flex flex-col gap-5 px-5 py-7">{links.map(link => <a onClick={() => setOpen(false)} key={link.label} href={link.href} className="text-2xl tracking-tight">{link.label}</a>)}</div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

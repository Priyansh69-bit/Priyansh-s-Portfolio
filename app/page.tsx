import Image from "next/image";
import { ArrowDown, MoveUpRight, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { projects } from "@/data/projects";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

const contact = {
  phone: "7651900237",
  email: "priyanshpal2004@gmail.com",
  instagram: "https://www.instagram.com/priyanshhh_.7/",
  linkedin: "https://www.linkedin.com/in/priyansh-pal-1b9287339/"
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="relative flex min-h-[92svh] items-end overflow-hidden px-5 pb-12 pt-32 md:min-h-screen md:px-12 md:pb-16">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=90" alt="Atmospheric cinematic landscape" fill priority sizes="100vw" className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/55 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1440px]">
            <Reveal><p className="section-kicker mb-7">Independent creative · India · 2026</p></Reveal>
            <Reveal delay={.1}><h1 className="max-w-6xl text-[clamp(4.4rem,13.8vw,13rem)] font-black uppercase leading-[.77] tracking-[-.105em]">Priyansh<br /><span className="outline-text">Pal.</span></h1></Reveal>
            <div className="mt-10 flex flex-col justify-between gap-8 md:mt-14 md:flex-row md:items-end">
              <Reveal delay={.2}><p className="max-w-md text-sm leading-7 text-white/65 md:text-base">I create. I capture. I tell stories.<br />Visual storytelling through photography, film<br className="hidden md:block" /> and design.</p></Reveal>
              <Reveal delay={.3}><a href="#work" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[.2em]">Explore selected work <span className="grid h-11 w-11 place-items-center rounded-full border border-white/35 transition group-hover:rotate-45 group-hover:border-ember group-hover:bg-ember group-hover:text-black"><ArrowDown size={16} /></span></a></Reveal>
            </div>
          </div>
          <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] tracking-[.3em] text-white/45 md:block">SCROLL TO EXPLORE — 001</span>
        </section>

        <div className="overflow-hidden border-y rule py-4">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[10px] uppercase tracking-[.25em] text-white/45">
            {Array.from({ length: 4 }).map((_, i) => <span key={i}>Photography <b className="mx-8 text-ember">✳</b> Cinematography <b className="mx-8 text-ember">✳</b> Editing <b className="mx-8 text-ember">✳</b> Visual Design <b className="mx-8 text-ember">✳</b></span>)}
          </div>
        </div>

        <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 md:px-12 md:py-36">
          <Reveal><div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end"><div><p className="section-kicker">01 / Selected work</p><h2 className="mt-5 text-5xl font-bold tracking-[-.075em] md:text-7xl">Frames that<br /><span className="text-white/35">stay with you.</span></h2></div><p className="max-w-xs text-sm leading-6 text-white/45">A selection of visual stories, experiments and collaborations. More work coming soon.</p></div></Reveal>
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 md:gap-y-20">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div>
        </section>

        <section id="about" className="border-y rule bg-[#0D0D0D]">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-12 md:py-36">
            <Reveal><p className="section-kicker">02 / A little about me</p><p className="mt-5 text-xs uppercase tracking-[.18em] text-white/40">Curiosity in every frame.</p></Reveal>
            <Reveal delay={.12}><h2 className="text-3xl leading-[1.25] tracking-[-.055em] md:text-5xl">I&apos;m a visual creative drawn to the details people often miss. I work across <span className="text-ember">photography, cinematography, editing and design</span> to turn ideas into visuals with feeling and intention.</h2><p className="mt-8 max-w-xl text-sm leading-7 text-white/45">From fast-paced event environments to considered brand visuals, I enjoy the complete process — understanding the story, finding the frame and shaping the final experience.</p></Reveal>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 md:px-12 md:py-36">
          <Reveal><p className="section-kicker">03 / What I do</p><h2 className="mt-5 text-5xl font-bold tracking-[-.075em] md:text-7xl">Creative, from<br />every angle.</h2></Reveal>
          <div className="mt-14">
            {[
              ["01", "Photography", "Events, portraits, products & lifestyle"],
              ["02", "Cinematography", "Brand films, event films & visual stories"],
              ["03", "Post-production", "Video editing, colour & finishing"],
              ["04", "Graphic design", "Campaign creatives, identity & visual systems"]
            ].map(([n, title, desc]) => <Reveal key={n}><div className="group grid grid-cols-[45px_1fr] items-center gap-3 border-t rule py-7 transition hover:pl-3 md:grid-cols-[80px_1fr_1fr] md:py-9"><span className="text-xs text-ember">{n}</span><h3 className="text-2xl tracking-[-.05em] transition group-hover:text-ember md:text-4xl">{title}</h3><p className="col-start-2 mt-1 text-xs text-white/40 md:col-start-auto md:mt-0 md:text-right">{desc}</p></div></Reveal>)}
          </div>
        </section>

        <section className="relative overflow-hidden border-y rule bg-[#111] px-5 py-24 md:px-12 md:py-36">
          <div className="mx-auto max-w-[1440px]">
            <Reveal><p className="section-kicker">04 / The next frame</p><h2 className="mt-6 max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[.84] tracking-[-.09em]">Have a story<br />to <span className="text-ember">tell?</span></h2><a href={`mailto:${contact.email}`} className="mt-12 inline-flex items-center gap-5 border-b border-white/35 pb-3 text-sm uppercase tracking-[.15em] transition hover:border-ember hover:text-ember">Let&apos;s make it happen <MoveUpRight size={17} /></a></Reveal>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
          <Reveal><p className="section-kicker">05 / Get in touch</p><h2 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-.075em] md:text-7xl">Let&apos;s create<br /><span className="text-white/35">something meaningful.</span></h2></Reveal>
          <div className="mt-12 grid gap-5 border-t rule pt-8 md:grid-cols-2">
            <a href={`tel:${contact.phone}`} className="group flex items-center gap-4 py-3 transition hover:text-ember"><span className="grid h-12 w-12 place-items-center rounded-full border rule"><Phone size={18} /></span><span><span className="block text-[10px] uppercase tracking-[.18em] text-white/40">Call me</span><span className="mt-1 block text-lg">{contact.phone}</span></span><MoveUpRight className="ml-auto" size={17} /></a>
            <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 py-3 transition hover:text-ember"><span className="grid h-12 w-12 place-items-center rounded-full border rule"><Mail size={18} /></span><span><span className="block text-[10px] uppercase tracking-[.18em] text-white/40">Email</span><span className="mt-1 block break-all text-lg">{contact.email}</span></span><MoveUpRight className="ml-auto shrink-0" size={17} /></a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-3 transition hover:text-ember"><span className="grid h-12 w-12 place-items-center rounded-full border rule"><Instagram size={18} /></span><span><span className="block text-[10px] uppercase tracking-[.18em] text-white/40">Instagram</span><span className="mt-1 block text-lg">@priyanshhh_.7</span></span><MoveUpRight className="ml-auto" size={17} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-3 transition hover:text-ember"><span className="grid h-12 w-12 place-items-center rounded-full border rule"><Linkedin size={18} /></span><span><span className="block text-[10px] uppercase tracking-[.18em] text-white/40">LinkedIn</span><span className="mt-1 block text-lg">Priyansh Pal</span></span><MoveUpRight className="ml-auto" size={17} /></a>
          </div>
        </section>

        <footer className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 border-t rule px-5 py-10 text-[10px] uppercase tracking-[.16em] text-white/45 md:flex-row md:items-center md:px-12">
          <span>© 2026 Priyansh Pal. All rights reserved.</span>
          <div className="flex flex-wrap gap-6"><a className="hover:text-white" href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a className="hover:text-white" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="hover:text-white" href={`mailto:${contact.email}`}>Email ↗</a><a className="hover:text-white" href={`tel:${contact.phone}`}>Call ↗</a></div>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}

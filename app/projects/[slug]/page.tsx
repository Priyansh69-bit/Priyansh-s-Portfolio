import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-[72px]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12 md:py-20">
          <Link href="/#work" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-white/50 transition hover:text-ember"><ArrowLeft size={14} /> Back to selected work</Link>
          <Reveal><div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="section-kicker">{project.number} / {project.category}</p><h1 className="mt-5 text-6xl font-black tracking-[-.09em] md:text-[9rem]">{project.title}</h1></div><p className="text-xs uppercase tracking-[.18em] text-white/45">{project.type} · {project.year}</p></div></Reveal>
          <Reveal delay={.1}><div className="relative mt-12 aspect-[16/9] overflow-hidden bg-white/5"><Image src={project.cover} alt={project.title} fill priority sizes="100vw" className="object-cover" /></div></Reveal>
          <div className="grid gap-10 py-16 md:grid-cols-[1.2fr_.8fr] md:py-24">
            <Reveal><p className="section-kicker">The story</p><p className="mt-5 max-w-2xl text-2xl leading-relaxed tracking-[-.04em] md:text-4xl">{project.intro}</p></Reveal>
            <Reveal delay={.12}><p className="section-kicker">My contribution</p><ul className="mt-5 space-y-3">{project.role.map(item => <li key={item} className="border-b rule pb-3 text-sm text-white/65">{item}</li>)}</ul></Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-2">{project.gallery.map((src, i) => <Reveal key={src} delay={i * .1}><div className="relative aspect-[4/5] overflow-hidden bg-white/5"><Image src={src} alt={`${project.title} gallery image ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div></Reveal>)}</div>
          <div className="flex justify-between border-t rule py-12 mt-20"><Link href="/#work" className="text-xs uppercase tracking-[.15em] text-white/55 hover:text-white">← All projects</Link><a href="mailto:hello@priyanshpal.com" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.15em] hover:text-ember">Start a project <ArrowUpRight size={14} /></a></div>
        </div>
      </main>
    </>
  );
}

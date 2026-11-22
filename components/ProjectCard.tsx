"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: index * .08 }}>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="image-wrap relative aspect-[4/3] overflow-hidden bg-white/5">
          <Image src={project.cover} alt={`${project.title} project visual`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
          <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 backdrop-blur transition group-hover:rotate-45 group-hover:bg-ember group-hover:text-black"><ArrowUpRight size={18} /></span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div><p className="text-[9px] tracking-[.2em] text-ember">{project.number} / {project.category}</p><h3 className="mt-2 text-2xl tracking-[-.05em] md:text-3xl">{project.title}</h3></div>
          <span className="pt-5 text-xs text-white/40">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}

import Link from "next/link";
export default function NotFound() {
  return <main className="grid min-h-screen place-items-center px-6 text-center"><div><p className="section-kicker">404 / Not found</p><h1 className="mt-5 text-6xl font-black tracking-[-.08em]">Lost the frame.</h1><Link href="/" className="mt-8 inline-block border-b border-ember pb-2 text-xs uppercase tracking-widest">Back home ↗</Link></div></main>;
}

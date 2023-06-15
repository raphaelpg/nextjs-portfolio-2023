import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-around my-8 tracking-widest">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  )
}
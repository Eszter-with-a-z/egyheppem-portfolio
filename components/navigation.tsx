"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ProfilePicture } from "./profile-img"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Kedőlap" },
    { href: "/best-pictures", label: "Kedvenc képeim" },
    { href: "/projects", label: "Projektjeim" },
    { href: "/testimonials", label: "Mások mondták" },
    { href: "/about", label: "Rólam & Kontakt" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className=" flex text-xl font-bold tracking-tight hover:text-primary transition-colors">
            <ProfilePicture size={30}/>
            <div
                className="rounded-full px-3 py-1 m-1  shadow-lg
                  bg-accent  rounded-full rounded-tl-xs "
             >
                 <p className="text-base font-light">
                    egyheppem
                 </p>
                 
              </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm bg-white py-2 px-4 md:px-2 rounded-full font-medium transition-colors hover:text-white hover:bg-black shadow-lg ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer  bg-white rounded-full md:hidden p-2 hover:bg-black hover:text-accent-foreground rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 ml-8 animate-fade-in bg-white py-2 px-4 rounded-3xl rounded-tl-xs shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

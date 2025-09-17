import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mi", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
  <nav
    className={cn(
      "fixed top-0 left-0 w-full transition-colors duration-300",
      isScrolled && !isMenuOpen
        ? "bg-background/80 backdrop-blur-md shadow-xs z-40"
        : "bg-transparent z-40"
    )}
    style={{ height: "64px" }}
  >
    <div className="container flex items-center justify-between h-full">
      <a
        className="text-xl font-bold text-primary flex items-center"
        href="#home"
      >
        <span className="relative z-10">
          <span className="text-glow text-foreground">Portfolio</span> Gonzalo
        </span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
        <ThemeToggle />
      </div>

      {/* Botón móvil */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-foreground z-60"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú móvil */}
      <div
        className={cn(
          "fixed inset-0 bg-black/70 backdrop-blur-md z-50 transition-opacity duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
);
};
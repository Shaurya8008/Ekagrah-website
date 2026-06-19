"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Ekagrah Seva Foundation" 
              width={160} 
              height={50} 
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
              unoptimized={true}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "font-heading font-medium text-sm flex items-center gap-1 transition-colors duration-200 nav-link-animated py-2",
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-xl shadow-elevated border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                      <ul className="py-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground-muted hover:text-primary hover:bg-primary-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Button
              href="/donate"
              variant="primary"
              size="sm"
              icon={<Heart className="w-4 h-4" />}
            >
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
               <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-surface border-b border-border transition-all duration-300 ease-in-out overflow-hidden shadow-lg",
          isMobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="flex flex-col gap-2">
                <Link
                  href={item.href}
                  className={cn(
                    "block font-heading font-medium text-lg",
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
                {/* Mobile Dropdown Sub-items */}
                {item.children && (
                  <ul className="flex flex-col gap-2 pl-4 border-l-2 border-border/50">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block text-foreground-muted hover:text-primary py-1"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-2 border-t border-border">
            <Button
              href="/donate"
              variant="primary"
              className="w-full"
              icon={<Heart className="w-4 h-4" />}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

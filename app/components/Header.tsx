'use client';

import { useState } from 'react';
import Link from 'next/link';
import { config } from '@/app/config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" style={{ borderBottom: `2px solid ${config.primaryColor}` }}>
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold" style={{ color: config.primaryColor }}>
              Mon Parrain Boursobank
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" 
              className="font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Accueil
            </Link>
            <Link href="/comment-ca-marche" 
              className="font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Comment ça marche
            </Link>
            <Link href="/blog" 
              className="font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Blog
            </Link>
            <Link href="/contact" 
              className="font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <button 
            className="hidden md:block text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm"
            style={{ backgroundColor: config.primaryColor }}
          >
            Ouvrir un compte
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: config.primaryColor }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2" style={{ borderTop: `2px solid ${config.primaryColor}` }}>
            <Link href="/" 
              className="block py-2 transition-opacity font-medium hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Accueil
            </Link>
            <Link href="/comment-ca-marche" 
              className="block py-2 transition-opacity font-medium hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Comment ça marche
            </Link>
            <Link href="/blog" 
              className="block py-2 transition-opacity font-medium hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Blog
            </Link>
            <Link href="/contact" 
              className="block py-2 transition-opacity font-medium hover:opacity-70"
              style={{ color: config.primaryColor }}
            >
              Contact
            </Link>
            <button 
              className="w-full text-white font-bold py-2 px-6 rounded-lg mt-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.primaryColor }}
            >
              Ouvrir un compte
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

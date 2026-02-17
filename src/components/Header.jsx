import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Header({ darkMode, toggleDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tight text-brand-primary">
                    <span className="text-brand-text">Dra.</span> Maria Carolina
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#services" className="text-brand-text hover:text-brand-primary transition-colors">Serviços</a>
                    <a href="#about" className="text-brand-text hover:text-brand-primary transition-colors">Sobre</a>
                    <a href="#contact" className="text-brand-text hover:text-brand-primary transition-colors">Contato</a>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-brand-text/5 transition-colors text-brand-text"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-brand-text/5 transition-colors text-brand-text"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-brand-text"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-brand-text/5 py-4 px-6 flex flex-col space-y-4 shadow-lg">
                    <a
                        href="#services"
                        className="text-brand-text hover:text-brand-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Serviços
                    </a>
                    <a
                        href="#about"
                        className="text-brand-text hover:text-brand-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre
                    </a>
                    <a
                        href="#contact"
                        className="text-brand-text hover:text-brand-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contato
                    </a>
                </div>
            )}
        </header>
    );
}

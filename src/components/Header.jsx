import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ darkMode, toggleDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Serviços', href: '#services' },
        { name: 'Diferenciais', href: '#differentials' },
        { name: 'Sobre', href: '#about' },
        { name: 'Depoimentos', href: '#testimonials' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-brand-dark-bg/80 backdrop-blur-md border-b border-brand-100 dark:border-brand-900 shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="group">
                    <div className="text-2xl font-display font-bold tracking-tight text-brand-800 dark:text-brand-100 group-hover:opacity-80 transition-opacity">
                        <span className="text-brand-500">Dra.</span> Maria Carolina
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-brand-dark-text/70 dark:text-brand-100/70 hover:text-brand-600 dark:hover:text-brand-300 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transform hover:-translate-y-0.5"
                    >
                        Agendar Consulta
                    </a>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-brand-50 dark:hover:bg-brand-900 transition-colors text-brand-600 dark:text-brand-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-brand-50 dark:hover:bg-brand-900 transition-colors text-brand-600 dark:text-brand-300"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-brand-800 dark:text-brand-100"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-brand-dark-bg border-b border-brand-100 dark:border-brand-900 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-brand-dark-text/80 dark:text-brand-100/80 hover:text-brand-600 dark:hover:text-brand-300 font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="text-center px-5 py-3 bg-brand-600 text-white rounded-lg font-medium shadow-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Agendar Consulta
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

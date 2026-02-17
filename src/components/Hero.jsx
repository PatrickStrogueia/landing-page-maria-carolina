import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="pt-32 pb-16 md:pt-48 md:pb-32 container mx-auto px-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8 z-10"
                >
                    <div className="inline-block px-4 py-2 bg-brand-50 dark:bg-brand-900/30 rounded-full border border-brand-100 dark:border-brand-800">
                        <span className="text-brand-600 dark:text-brand-300 font-medium text-sm">Odontologia Humanizada & Integrativa</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-brand-dark-text dark:text-brand-50">
                        Seu Sorriso <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">Mais Feliz</span> <br />
                        Começa Aqui.
                    </h1>

                    <p className="text-xl md:text-2xl text-brand-dark-muted dark:text-brand-light-muted max-w-lg leading-relaxed font-light">
                        Cuidado, conforto e tecnologia para transformar sua saúde bucal e autoestima.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="https://wa.me/"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transform hover:-translate-y-1"
                        >
                            <MessageCircle size={20} />
                            Agendar por WhatsApp
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-brand-dark-surface hover:bg-gray-50 dark:hover:bg-brand-800 text-brand-dark-text dark:text-brand-50 font-semibold rounded-full border border-brand-100 dark:border-brand-700 transition-all hover:shadow-lg"
                        >
                            Conhecer Tratamentos
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full relative z-10"
                >
                    <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-900/10 dark:shadow-black/50 border-8 border-white dark:border-brand-800/50">
                        {/* Placeholder Image - In production use a real image */}
                        <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900 dark:to-brand-950 flex flex-col items-center justify-center text-brand-900 dark:text-brand-100 p-8 text-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <span className="text-6xl mb-4 block">👩‍⚕️</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-2">Dra. Maria Carolina</h3>
                            <p className="opacity-70">Sua dentista de confiança</p>
                            <div className="mt-8 text-xs opacity-50 border px-4 py-2 rounded-full border-brand-900/20 dark:border-brand-100/20">
                                Foto Profissional da Dra.
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-200/50 dark:bg-brand-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent-200/50 dark:bg-accent-500/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-4 h-4 rounded-full bg-brand-300/40"></div>
                <div className="absolute top-[30%] right-[10%] w-6 h-6 rounded-full bg-accent-300/40"></div>
                <div className="absolute bottom-[20%] left-[15%] w-8 h-8 rounded-full border-2 border-brand-200/30"></div>
            </div>
        </section>
    );
}

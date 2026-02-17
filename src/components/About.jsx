import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 container mx-auto px-6 bg-white dark:bg-brand-dark-bg transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Image Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full grid grid-cols-2 gap-4"
                >
                    <div className="space-y-4 mt-8">
                        <div className="aspect-[3/4] bg-brand-100 dark:bg-brand-900 rounded-[2rem] w-full overflow-hidden relative">
                            {/* Placeholder for real image */}
                            <div className="absolute inset-0 bg-brand-200/20 dark:bg-brand-800/20"></div>
                        </div>
                        <div className="aspect-square bg-brand-50 dark:bg-brand-800 rounded-[2rem] w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-100/30 dark:bg-brand-700/30"></div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="aspect-square bg-brand-50 dark:bg-brand-800 rounded-[2rem] w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-100/30 dark:bg-brand-700/30"></div>
                        </div>
                        <div className="aspect-[3/4] bg-brand-200 dark:bg-brand-700 rounded-[2rem] w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-300/20 dark:bg-brand-600/20"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8"
                >
                    <div className="inline-block px-4 py-2 bg-brand-50 dark:bg-brand-900 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-300 rounded-full font-medium text-sm tracking-wide">
                        SOBRE A DOUTORA
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-900 dark:text-brand-50 leading-tight">
                        Mais que uma dentista, <br />uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-300">parceira</span> do seu sorriso.
                    </h2>
                    <div className="space-y-6 text-lg text-brand-dark-text/70 dark:text-brand-100/70 leading-relaxed font-light">
                        <p>
                            Olá! Sou a Dra. Maria Carolina. Minha missão é transformar a maneira como você enxerga o cuidado odontológico.
                        </p>
                        <p>
                            Com mais de 10 anos de experiência clínica, entendo que por trás de cada sorriso existe uma história única. Por isso, meu atendimento vai além da técnica: é focado na escuta e no acolhimento.
                        </p>
                        <p>
                            Busco constantemente atualizações para trazer o que há de mais moderno e confortável para meus pacientes, sempre com aquela conversa boa e sem pressa que faz toda a diferença.
                        </p>
                    </div>

                    <div className="pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-px bg-brand-100 dark:bg-brand-800"></div>
                            <span className="font-handwriting text-2xl text-brand-500 transform -rotate-6">Maria Carolina</span>
                            <div className="flex-1 h-px bg-brand-100 dark:bg-brand-800"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

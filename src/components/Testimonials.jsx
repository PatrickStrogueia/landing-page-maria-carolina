import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Ana Clara Silva",
        role: "Paciente há 3 anos",
        content: "A Dra. Maria é incrível! Eu tinha pavor de dentista, mas ela me deixou super tranquila. O consultório é lindo e o atendimento impecável.",
        stars: 5,
        initial: "A"
    },
    {
        name: "Roberto Mendes",
        role: "Tratamento de implante",
        content: "Profissionalismo nota 10. O resultado do meu tratamento ficou perfeito. Recomendo para todos os meus amigos e familiares.",
        stars: 5,
        initial: "R"
    },
    {
        name: "Juliana Costa",
        role: "Check-up preventivo",
        content: "Adoro a pontualidade e o cuidado com a higiene. Me sinto muito segura em todas as consultas. O ambiente é muito relaxante.",
        stars: 5,
        initial: "J"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white dark:bg-brand-dark-bg relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-6 text-brand-900 dark:text-brand-50"
                    >
                        Sorrisos Reais
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-dark-muted dark:text-brand-light-muted text-lg font-light"
                    >
                        O que nossos pacientes dizem sobre a experiência.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-brand-50 dark:bg-brand-900/20 p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-brand-100 dark:border-brand-800 relative group"
                        >
                            <Quote className="absolute top-8 right-8 text-brand-200 dark:text-brand-800 group-hover:text-brand-300 dark:group-hover:text-brand-700 transition-colors" size={40} />

                            <div className="flex gap-1 text-accent-400 mb-6">
                                {[...Array(t.stars)].map((_, si) => (
                                    <Star key={si} size={18} fill="currentColor" className="drop-shadow-sm" />
                                ))}
                            </div>

                            <p className="text-brand-dark-text/80 dark:text-brand-100/90 text-lg mb-8 leading-relaxed">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-500/30">
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-900 dark:text-brand-50">{t.name}</h4>
                                    <p className="text-sm text-brand-500 dark:text-brand-400 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--brand-200) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </section>
    );
}

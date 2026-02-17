import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ana Clara Silva",
        role: "Paciente há 3 anos",
        content: "A Dra. Maria é incrível! Eu tinha pavor de dentista, mas ela me deixou super tranquila. O consultório é lindo e o atendimento impecável.",
        stars: 5
    },
    {
        name: "Roberto Mendes",
        role: "Tratamento de implante",
        content: "Profissionalismo nota 10. O resultado do meu tratamento ficou perfeito. Recomendo para todos os meus amigos e familiares.",
        stars: 5
    },
    {
        name: "Juliana Costa",
        role: "Check-up preventivo",
        content: "Adoro a pontualidade e o cuidado com a higiene. Me sinto muito segura em todas as consultas. O ambiente é muito relaxante.",
        stars: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-brand-surface/50 -skew-y-3 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text">Sorrisos Reais</h2>
                    <p className="text-brand-text/70 text-lg">O que nossos pacientes dizem sobre a experiência.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-brand-bg p-8 rounded-3xl shadow-lg border border-brand-text/5 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[...Array(t.stars)].map((_, si) => (
                                        <Star key={si} size={20} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-brand-text/80 text-lg italic mb-8">"{t.content}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-text/10 flex items-center justify-center font-bold text-brand-text text-xl">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-text">{t.name}</h4>
                                    <p className="text-sm text-brand-text/60">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { Wifi, Home, Clock } from 'lucide-react';

export default function Differentials() {
    return (
        <section className="py-24 container mx-auto px-6">
            <div className="bg-brand-dark-bg rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-brand-dark-text shadow-2xl">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px]"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Por que nos escolher?
                        </h2>
                        <p className="text-brand-dark-text/80 text-lg leading-relaxed mb-8">
                            Acreditamos que ir ao dentista deve ser uma experiência tranquila e positiva. Nosso consultório foi pensado para acolher você.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-brand-primary">
                                <Wifi size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Tecnologia Moderna</h3>
                                <p className="text-brand-dark-text/70">Equipamentos de ponta para diagnósticos precisos e tratamentos menos invasivos.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-brand-primary">
                                <Home size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Ambiente Acolhedor</h3>
                                <p className="text-brand-dark-text/70">Design calmante, café fresquinho e uma equipe pronta para ouvir você.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-brand-primary">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Atendimento Pontual</h3>
                                <p className="text-brand-dark-text/70">Respeitamos seu tempo. Agendamento inteligente para evitar esperas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

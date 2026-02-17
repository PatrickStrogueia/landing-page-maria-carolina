import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-24 container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Image Grid */}
                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                        <div className="aspect-[3/4] bg-brand-primary/20 rounded-2xl w-full"></div>
                        <div className="aspect-square bg-brand-secondary/20 rounded-2xl w-full"></div>
                    </div>
                    <div className="space-y-4">
                        <div className="aspect-square bg-brand-secondary/30 rounded-2xl w-full"></div>
                        <div className="aspect-[3/4] bg-brand-primary/30 rounded-2xl w-full"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8">
                    <div className="inline-block px-4 py-2 bg-brand-secondary/10 text-brand-secondary rounded-full font-medium text-sm tracking-wide">
                        SOBRE A DOUTORA
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text leading-tight">
                        Mais que uma dentista, uma parceira do seu sorriso.
                    </h2>
                    <div className="space-y-6 text-lg text-brand-text/70 leading-relaxed">
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
                </div>
            </div>
        </section>
    );
}

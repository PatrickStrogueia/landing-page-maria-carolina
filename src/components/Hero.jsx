import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="pt-32 pb-16 md:pt-48 md:pb-32 container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-brand-text">
                        Seu Sorriso Mais <span className="text-brand-primary">Saudável</span> e <span className="text-brand-primary">Feliz</span> Começa Aqui.
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-text/80 max-w-lg leading-relaxed">
                        Atendimento odontológico humanizado e acolhedor para você e toda a sua família. Tecnologia e cuidado em cada detalhe.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="https://wa.me/" // Add real number later
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-primary hover:bg-opacity-90 text-brand-dark-bg font-semibold rounded-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <MessageCircle size={24} />
                            Agendar via WhatsApp
                        </a>
                    </div>
                </div>

                {/* Visual Content (Image Placeholder) */}
                <div className="flex-1 w-full relative">
                    <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden bg-brand-surface border-8 border-brand-surface shadow-2xl">
                        {/* Placeholder for Dentist Image */}
                        <div className="w-full h-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                            <span className="text-lg">Foto Dra. Maria Carolina</span>
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}

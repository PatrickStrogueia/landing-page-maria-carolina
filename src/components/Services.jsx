import React from 'react';
import { Stethoscope, Sparkles, HeartPulse, Smile, ShieldCheck, Microscope } from 'lucide-react';

const services = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Check-up Preventivo",
        description: "Avaliação completa para manter sua saúde bucal sempre em dia evitando surpresas."
    },
    {
        icon: <Sparkles size={32} />,
        title: "Clareamento",
        description: "Tecnologia segura para devolver o brilho e a cor natural do seu sorriso."
    },
    {
        icon: <Smile size={32} />,
        title: "Restaurações",
        description: "Material estético de alta qualidade que se funde imperceptivelmente ao dente."
    },
    {
        icon: <HeartPulse size={32} />,
        title: "Tratamento Gengival",
        description: "Cuidado delicado com a base do seu sorriso, focando em saúde e prevenção."
    },
    {
        icon: <Microscope size={32} />,
        title: "Pequenas Cirurgias",
        description: "Procedimentos seguros realizados com máximo conforto e recuperação rápida."
    },
    {
        icon: <Stethoscope size={32} />,
        title: "Higiene Bucal",
        description: "Limpeza profissional detalhada para remover placa e tártaro inacessíveis."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-brand-surface/50">
            <div className="container mx-auto px-6">
                <div className="text-center md:mb-16 mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text">Cuidado Completo</h2>
                    <p className="text-brand-text/70 max-w-2xl mx-auto text-lg">
                        Oferecemos uma gama variada de tratamentos para garantir que seu sorriso esteja sempre radiante e saudável.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-brand-bg md:hover:-translate-y-2 transition-all duration-300 border border-brand-text/5 hover:border-brand-primary/30 shadow-sm hover:shadow-xl"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-brand-dark-bg transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-brand-text">{service.title}</h3>
                            <p className="text-brand-text/70 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

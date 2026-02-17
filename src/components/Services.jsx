import React from 'react';
import { Stethoscope, Sparkles, HeartPulse, Smile, ShieldCheck, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

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

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-brand-50/50 dark:bg-brand-950/30">
            <div className="container mx-auto px-6">
                <div className="text-center md:mb-16 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-brand-dark-text dark:text-brand-50">Cuidado Completo</h2>
                        <p className="text-brand-dark-muted dark:text-brand-light-muted max-w-2xl mx-auto text-lg">
                            Oferecemos uma gama variada de tratamentos para garantir que seu sorriso esteja sempre radiante e saudável.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group p-8 rounded-[2rem] bg-white dark:bg-brand-dark-surface hover:bg-brand-50 dark:hover:bg-brand-900 border border-brand-100 dark:border-brand-800/50 hover:border-brand-200 dark:hover:border-brand-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                {React.cloneElement(service.icon, { size: 120 })}
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-brand-dark-text dark:text-brand-50">{service.title}</h3>
                            <p className="text-brand-dark-muted dark:text-brand-light-muted leading-relaxed relative z-10">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

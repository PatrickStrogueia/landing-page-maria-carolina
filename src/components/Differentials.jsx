import React from 'react';
import { Wifi, Home, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Differentials() {
    return (
        <section id="differentials" className="py-24 container mx-auto px-6">
            <div className="bg-brand-900 rounded-[3rem] p-8 md:p-24 relative overflow-hidden text-brand-50 shadow-2xl">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px] mix-blend-screen"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-800/50 border border-brand-700 mb-6 text-brand-300 text-sm font-medium">
                            <Sparkles size={16} />
                            <span>Experiência Premium</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                            Por que nos <br /><span className="text-brand-300">escolher?</span>
                        </h2>
                        <p className="text-brand-100/80 text-xl leading-relaxed mb-8 font-light">
                            Acreditamos que ir ao dentista deve ser uma experiência tranquila e positiva. Nosso consultório foi pensado detlahadamente para acolher você.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            { icon: Wifi, title: "Tecnologia Moderna", desc: "Equipamentos de ponta para diagnósticos precisos e tratamentos menos invasivos." },
                            { icon: Home, title: "Ambiente Acolhedor", desc: "Design calmante, café fresquinho e uma equipe pronta para ouvir você." },
                            { icon: Clock, title: "Atendimento Pontual", desc: "Respeitamos seu tempo. Agendamento inteligente para evitar esperas." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group flex items-start gap-6 p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/5 hover:border-brand-500/30 transition-all duration-300"
                            >
                                <div className="p-4 rounded-2xl bg-brand-800/50 text-brand-300 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-brand-50 group-hover:text-brand-300 transition-colors">{item.title}</h3>
                                    <p className="text-brand-200/60 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

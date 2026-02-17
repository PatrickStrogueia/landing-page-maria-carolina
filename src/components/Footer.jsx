import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-50 dark:bg-brand-950 pt-24 pb-8 border-t border-brand-100 dark:border-brand-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="text-2xl font-display font-bold text-brand-900 dark:text-brand-50">
                            <span className="text-brand-500">Dra.</span> Maria Carolina
                        </div>
                        <p className="text-brand-dark-muted dark:text-brand-light-muted leading-relaxed">
                            Transformando vidas através de sorrisos saudáveis e bonitos. Agende sua consulta hoje mesmo.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: MessageCircle, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-3 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-brand-900 dark:text-brand-50">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-brand-dark-text/80 dark:text-brand-100/80">
                                <MapPin className="mt-1 text-brand-500 shrink-0" size={20} />
                                <span>
                                    Av. Paulista, 1000 - Sala 42<br />
                                    Bela Vista, São Paulo - SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark-text/80 dark:text-brand-100/80">
                                <Phone className="text-brand-500 shrink-0" size={20} />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark-text/80 dark:text-brand-100/80">
                                <Mail className="text-brand-500 shrink-0" size={20} />
                                <span>contato@dramariacarolina.com.br</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-brand-900 dark:text-brand-50">Horários</h3>
                        <ul className="space-y-3 text-brand-dark-text/80 dark:text-brand-100/80">
                            <li className="flex justify-between border-b border-brand-200 dark:border-brand-800 pb-2">
                                <span>Segunda - Sexta</span>
                                <span className="font-medium">08:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between border-b border-brand-200 dark:border-brand-800 pb-2">
                                <span>Sábado</span>
                                <span className="font-medium">08:00 - 13:00</span>
                            </li>
                            <li className="flex justify-between pt-2">
                                <span>Domingo</span>
                                <span className="text-brand-500 font-medium">Fechado</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-brand-900 dark:text-brand-50">Links</h3>
                        <ul className="space-y-3">
                            {['Início', 'Tratamentos', 'Sobre Nós', 'Agendar'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link === 'Início' ? 'hero' : link === 'Tratamentos' ? 'services' : link === 'Sobre Nós' ? 'about' : 'contact'}`} className="text-brand-dark-text/70 dark:text-brand-100/70 hover:text-brand-500 dark:hover:text-brand-300 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:w-3 transition-all"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-64 bg-brand-100 dark:bg-brand-900 rounded-3xl overflow-hidden mb-12 border border-brand-200 dark:border-brand-800 relative group grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-500/5 group-hover:bg-transparent transition-colors">
                        <span className="flex items-center gap-2 text-brand-500 font-medium bg-white/80 dark:bg-brand-950/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
                            <MapPin size={16} /> Ver no Mapa
                        </span>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-brand-200 dark:border-brand-800 text-brand-dark-muted/60 dark:text-brand-light-muted/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>&copy; {new Date().getFullYear()} Dra. Maria Carolina. CRO 12345.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-brand-500 transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-brand-500 transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

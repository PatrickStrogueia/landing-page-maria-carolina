import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-surface pt-24 pb-8 border-t border-brand-text/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="text-2xl font-bold text-brand-primary">
                            <span className="text-brand-text">Dra.</span> Maria Carolina
                        </div>
                        <p className="text-brand-text/70">
                            Transformando vidas através de sorrisos saudáveis e bonitos. Agende sua consulta hoje mesmo.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-brand-bg text-brand-text hover:bg-brand-primary hover:text-brand-dark-bg transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-brand-bg text-brand-text hover:bg-brand-primary hover:text-brand-dark-bg transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-brand-bg text-brand-text hover:bg-brand-primary hover:text-brand-dark-bg transition-colors">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-brand-text">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-brand-text/80">
                                <MapPin className="mt-1 text-brand-primary shrink-0" size={20} />
                                <span>
                                    Av. Paulista, 1000 - Sala 42<br />
                                    Bela Vista, São Paulo - SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-text/80">
                                <Phone className="text-brand-primary shrink-0" size={20} />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-text/80">
                                <Mail className="text-brand-primary shrink-0" size={20} />
                                <span>contato@dramariacarolina.com.br</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-brand-text">Horários</h3>
                        <ul className="space-y-3 text-brand-text/80">
                            <li className="flex justify-between">
                                <span>Segunda - Sexta</span>
                                <span>08:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábado</span>
                                <span>08:00 - 13:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingo</span>
                                <span className="text-brand-primary">Fechado</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-brand-text">Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="text-brand-text/70 hover:text-brand-primary transition-colors">Início</a></li>
                            <li><a href="#services" className="text-brand-text/70 hover:text-brand-primary transition-colors">Tratamentos</a></li>
                            <li><a href="#about" className="text-brand-text/70 hover:text-brand-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#contact" className="text-brand-text/70 hover:text-brand-primary transition-colors">Agendar</a></li>
                        </ul>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-64 bg-brand-bg rounded-3xl overflow-hidden mb-12 border border-brand-text/5 relative group">
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-text/5 group-hover:bg-brand-text/10 transition-colors">
                        <span className="flex items-center gap-2 text-brand-text/50 font-medium">
                            <MapPin /> Mapa do Google
                        </span>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-brand-text/5 text-brand-text/50 text-sm">
                    &copy; {new Date().getFullYear()} Dra. Maria Carolina. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

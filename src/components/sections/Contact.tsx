import { motion } from "framer-motion";
import { MapPin, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="relative py-32 bg-[#0F1216]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-display text-white mb-12">
                            Contacto <span className="text-[#D4AF37]">Directo</span>
                        </h2>

                        <div className="space-y-10 mb-16">
                            <div className="flex items-start gap-6">
                                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-2 font-bold">Dirección</h4>
                                    <p className="text-zinc-400 leading-relaxed">
                                        C. Manuel Gutiérrez Nájera 1218,<br />
                                        Miraflores, 44270 Guadalajara, Jal., México
                                    </p>
                                    <a 
                                        href="https://www.google.com/maps/place/Jur%C3%ADdico+Ruiz/@20.6648501,-103.4212813,13z" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2 inline-block border-b border-[#D4AF37] pb-0.5"
                                    >
                                        Ver en Mapa
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <Phone className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-2 font-bold">Teléfono</h4>
                                    <a href="tel:+523314474428" className="text-zinc-400 hover:text-white transition-colors text-lg">
                                        +52 33 1447 4428
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-6">
                                <Facebook className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-2 font-bold">Redes Sociales</h4>
                                    <a 
                                        href="https://www.facebook.com/DESPACHO-JURIDICO-RUIZ-Y-ASOCIADOS" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        Facebook Oficial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-auto w-full bg-zinc-900 relative overflow-hidden grayscale invert contrast-125 brightness-75 border border-white/10">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.056046487968!2d-103.3551536!3d20.6672588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b21c76766493%3A0x6d366379c6563030!2sC.%20Manuel%20Guti%C3%A9rrez%20N%C3%A1jera%201218%2C%20Miraflores%2C%2044270%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1707925000000!5m2!1ses!2smx" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
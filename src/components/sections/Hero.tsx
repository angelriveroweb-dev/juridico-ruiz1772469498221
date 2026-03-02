import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/TextReveal";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0F1216]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                    alt="Abogados en Guadalajara"
                    className="w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1216] via-[#0F1216]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1216] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-12 xl:col-span-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-4 mb-8 overflow-hidden">
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                            <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold whitespace-nowrap">
                                Defensa Estratégica
                            </p>
                        </div>

                        <div className="font-display font-medium leading-none mb-10">
                            <TextReveal as="h1" className="flex flex-col gap-2">
                                <span className="block text-white text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase font-bold">
                                    Justicia con
                                </span>
                                <span className="block text-[#D4AF37] text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase font-bold md:ml-24">
                                    Resultados
                                </span>
                            </TextReveal>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="text-xl md:text-2xl text-zinc-400 font-sans font-light leading-relaxed border-l-2 border-[#D4AF37]/30 pl-8">
                            Expertos legales en Guadalajara. Defensa estratégica en materia <span className="text-white">Civil, Mercantil, Laboral y Penal.</span>
                        </p>

                        <div className="mt-8 flex items-center gap-3 text-zinc-500 font-sans text-sm tracking-wide">
                            <MapPin size={16} className="text-[#D4AF37]" />
                            <span>Guadalajara, Jalisco</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-sm px-12 py-8 text-sm tracking-widest uppercase font-bold transition-all duration-500"
                            onClick={() => window.location.href = '#contact'}
                        >
                            ASESORÍA GRATUITA
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
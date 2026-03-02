import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section id="testimonials" className="py-32 bg-[#0A0C0F] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase font-bold mb-4">Testimonios</p>
                    <h2 className="text-4xl md:text-5xl font-display text-white">
                        La Voz de Nuestros <span className="text-[#D4AF37] italic">Clientes</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0F1216] border border-white/5 p-8 rounded-sm hover:border-[#D4AF37]/30 transition-all duration-500"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                                ))}
                            </div>

                            <p className="text-lg font-display text-white italic leading-relaxed mb-8">
                                "{item.text}"
                            </p>

                            <div className="border-t border-white/5 pt-6">
                                <p className="text-white font-sans text-xs font-bold tracking-wider uppercase">
                                    {item.name}
                                </p>
                                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
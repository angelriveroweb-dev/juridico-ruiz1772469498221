import { motion } from "framer-motion";

const items = [
    {
        title: "Derecho Civil",
        desc: "Protección de patrimonio y contratos."
    },
    {
        title: "Mercantil",
        desc: "Soluciones para conflictos comerciales."
    },
    {
        title: "Laboral",
        desc: "Defensa de derechos del trabajador y patrón."
    },
    {
        title: "Penal",
        desc: "Estrategia de defensa técnica y rigurosa."
    }
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#0F1216] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
                            Áreas de Práctica
                        </p>
                        <h2 className="text-4xl md:text-6xl font-display text-white leading-tight">
                            Defensa <span className="text-[#D4AF37] italic">Integral</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-10 bg-[#0F1216] hover:bg-[#15181d] transition-all duration-500"
                        >
                            <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 font-sans font-light text-sm leading-relaxed">
                                {item.desc}
                            </p>
                            <div className="w-8 h-[1px] bg-[#D4AF37]/30 mt-8 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
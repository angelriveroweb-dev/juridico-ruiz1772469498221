export function Footer() {
    return (
        <footer className="bg-[#0A0C0F] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className="text-[10vw] leading-none font-display font-bold text-[#15181d] select-none tracking-tighter">
                        JURÍDICO RUIZ
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
                    <div className="mb-8 md:mb-0">
                        <p className="text-zinc-500 text-sm font-mono">
                            © {new Date().getFullYear()} Jurídico Ruiz.
                            <br />
                            Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-zinc-500 hover:text-[#D4AF37] text-xs uppercase tracking-widest transition-colors">Aviso de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
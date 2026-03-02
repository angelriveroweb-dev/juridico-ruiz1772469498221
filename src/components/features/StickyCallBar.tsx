import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- CONFIGURATION ---
const PHONE_NUMBER = "+523314474428";
const WHATSAPP_URL = "https://wa.me/523314474428";

export function StickyCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F1216]/90 backdrop-blur-md border-t border-white/10 p-4 pb-safe flex gap-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
            <Button
                className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 shadow-none rounded-sm uppercase tracking-widest text-xs font-bold"
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
                <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                WhatsApp
            </Button>
            <Button
                className="flex-1 bg-[#D4AF37] hover:bg-[#b5952f] text-black border-none shadow-lg shadow-[#D4AF37]/20 rounded-sm uppercase tracking-widest text-xs font-bold"
                onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
            >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
            </Button>
        </div>
    );
}
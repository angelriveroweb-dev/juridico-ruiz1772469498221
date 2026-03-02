export const config = {
    // Unique Client ID for this Landing Page
    landingClientId: "4e0b42bb-e409-4b84-bf9d-355ce5b5eef1",
    // Supabase Configuration
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
    // External Links
    bookingUrl: "#contact",
    paymentLink: "#",
    googleMapsReviewUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",

    // Analytics Webhook Configuration
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    // Dynamic Content (Architecture of Persuasion)
    dynamicContent: {
        city: "Guadalajara",
        localAnchor: "Guadalajara, Jalisco",
        stats: {
            casesWon: 0,
            experienceYears: 0,
            recoveredAmount: "0"
        },
        specialization: {
            title: "Resultados",
            pain: "Problemas Legales",
            ego: "Tranquilidad",
            hook: "Justicia con"
        },
        pricing: {
            basic: "",
            comprehensive: "",
            retainer: ""
        }
    },

    // Real Testimonials Data
    testimonials: [
        {
            name: "Roberto Arriaga",
            role: "Cliente Verificado",
            text: "Abogados muy profesionales, me ayudaron bastante con mi asunto.",
            tags: ["Profesionalismo"]
        },
        {
            name: "H Enríquez",
            role: "Cliente Verificado",
            text: "Equipo de Abogados muy competentes. Proponen opciones prácticas y viables.",
            tags: ["Eficacia"]
        },
        {
            name: "Lourdes Gutiérrez",
            role: "Cliente Verificado",
            text: "Ganamos el caso gracias a su amplia experiencia y profesionalismo.",
            tags: ["Experiencia"]
        }
    ],

    // Demo User Data
    demoUser: {
        name: "Cliente Potencial",
        email: "cliente@demo.com",
        whatsapp: "+523314474428"
    },
};
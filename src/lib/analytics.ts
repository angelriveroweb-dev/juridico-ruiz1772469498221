// --------------------------------------------------------------------------------
// IDENTITY LOGIC MIGRATED TO CDN ENGINE (lexflow-engine)
// --------------------------------------------------------------------------------

export const getVisitorId = () => {
    // Read ONLY. The CDN engine is responsible for generating and persisting this.
    return localStorage.getItem("visitor_id") || 'unknown';
};

/**
 * DEACTIVATED: Tracking is now managed by the LexFlow CDN engine.
 * This function remains as a placeholder to avoid breaking existing imports,
 * but it no longer writes to Supabase.
 */
export async function trackEvent(eventName: string, metadata: any = {}, clientId: string = 'unknown') {
    console.log(`[DEACTIVATED] Analytics Event: ${eventName}`, {
        visitorId: getVisitorId(),
        clientId,
        metadata
    });
}


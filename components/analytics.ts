"use client";

type MetaEventName =
  | "PageView"
  | "ViewContent"
  | "Contact"
  | "ConsultationRequest"
  | "WhatsAppClick";

type MetaEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(eventName: MetaEventName, params: MetaEventParams = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  if (eventName === "PageView" || eventName === "ViewContent" || eventName === "Contact") {
    window.fbq("track", eventName, params);
    return;
  }

  window.fbq("trackCustom", eventName, params);
}

export function trackContact(source: string) {
  trackMetaEvent("Contact", { source });
}

export function trackConsultationRequest(source: string) {
  trackMetaEvent("Contact", { source, intent: "consultation" });
  trackMetaEvent("ConsultationRequest", { source });
}

export function trackWhatsAppClick(source: string) {
  trackMetaEvent("WhatsAppClick", { source, channel: "whatsapp" });
}

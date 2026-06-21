export function trackEvent(name: string, payload: Record<string, unknown> = {}) {
  console.info("[trackEvent]", name, payload);
}

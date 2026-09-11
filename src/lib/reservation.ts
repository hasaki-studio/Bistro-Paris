// Petit utilitaire pour ouvrir la fenêtre de réservation depuis n'importe où.
const EVENT = "parisii:open-reservation";

export function openReservation() {
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function onOpenReservation(handler: () => void) {
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

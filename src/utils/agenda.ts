const MONTHS: Record<string, number> = {
  janvier: 1, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, aout: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12,
};

/**
 * Lit une date en texte libre (« Dimanche 6 décembre 2026 », « 1er mai 2027 »)
 * et renvoie « AAAA-MM-JJ », ou null si la date ou l'année est introuvable.
 */
export function parseFrenchDate(text: string): string | null {
  const normalized = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
  const match = normalized.match(/(\d{1,2})(?:er)?\s+([a-z]+)\s+(\d{4})/);
  if (!match) return null;
  const month = MONTHS[match[2]];
  const day = Number(match[1]);
  if (!month || day < 1 || day > 31) return null;
  return `${match[3]}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/** Date du jour (heure de Paris) au format « AAAA-MM-JJ ». */
export function todayInParis(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date());
}

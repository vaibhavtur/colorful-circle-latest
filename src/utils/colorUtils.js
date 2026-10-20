export const COLOR_OPTIONS = [
  { name: 'Red', hex: '#EF4444', labelBg: 'rgba(239, 68, 68, 0.15)' },
  { name: 'Blue', hex: '#3B82F6', labelBg: 'rgba(59, 130, 246, 0.15)' },
  { name: 'Green', hex: '#22C55E', labelBg: 'rgba(34, 197, 94, 0.15)' },
  { name: 'Yellow', hex: '#EAB308', labelBg: 'rgba(234, 179, 8, 0.15)' },
  { name: 'Purple', hex: '#A855F7', labelBg: 'rgba(168, 85, 247, 0.15)' },
  { name: 'Orange', hex: '#F97316', labelBg: 'rgba(249, 115, 22, 0.15)' },
  { name: 'Pink', hex: '#EC4899', labelBg: 'rgba(236, 72, 153, 0.15)' },
  { name: 'Cyan', hex: '#06B6D4', labelBg: 'rgba(6, 182, 212, 0.15)' },
];

export function applyShade(hex, shadePercent) {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  if (cleanHex.length !== 6) return hex;

  let num = parseInt(cleanHex, 16);
  let r = (num >> 16) & 255;
  let g = ((num >> 8) & 0x00FF) & 255;
  let b = (num & 0x0000FF) & 255;

  let factor = shadePercent / 100;

  if (factor < 0.5) {
    let ratio = factor * 2;
    r = Math.round(r * ratio);
    g = Math.round(g * ratio);
    b = Math.round(b * ratio);
  } else {
    let ratio = (factor - 0.5) * 2;
    r = Math.round(r + (255 - r) * ratio);
    g = Math.round(g + (255 - g) * ratio);
    b = Math.round(b + (255 - b) * ratio);
  }

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
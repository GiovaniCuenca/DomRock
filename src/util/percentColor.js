export default function percentColor(value) {
  const hue = Math.round(value);
  return ['hsl(', hue, ', 50%, 50%)'].join('');
}

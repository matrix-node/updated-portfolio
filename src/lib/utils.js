// Small utility helpers used around the app
// cn: a tiny className combiner similar to clsx
export function cn(...inputs) {
  const out = [];
  for (const i of inputs) {
    if (!i && i !== 0) continue;
    if (typeof i === 'string' || typeof i === 'number') {
      out.push(String(i));
    } else if (Array.isArray(i)) {
      out.push(cn(...i));
    } else if (typeof i === 'object') {
      for (const [k, v] of Object.entries(i)) {
        if (v) out.push(k);
      }
    }
  }
  return out.join(' ');
}

export default {
  cn,
};

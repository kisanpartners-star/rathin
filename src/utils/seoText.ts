/** Helpers that keep generated meta titles under 60 characters and descriptions around 150-160. */

export const clipTitle = (title: string, suffix = ' | Rathin', max = 60) => {
  if ((title + suffix).length <= max) return title + suffix;
  if (title.length <= max) return title;
  return `${title.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
};

export const fitDescription = (text: string, filler = ' Rathin: 1 year warranty and pan-India service.', min = 150, max = 160) => {
  let t = text.replace(/\s+/g, ' ').trim();
  if (t.length < min) t = `${t}${filler}`;
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.replace(/[\s,;:.-]+\S*$/, '')}…`;
};

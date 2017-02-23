const round = type => (x, precision) => {
  if (typeof x !== 'number') { throw new TypeError('Expected value to be a number'); }
  return Number(Math[type](`${x}e${Math.abs(precision)}`) + `e-${Math.abs(precision)}`);
};

const near = type => (x, nearest) => {
  if (typeof x !== 'number') { throw new TypeError('Expected value to be a number'); }
   return Number(Math[type](x / nearest) * nearest);
};

export const next = near('ceil');
export const prev = near('floor');
export const up = round('ceil');
export const down = round('floor');
export default round('round');

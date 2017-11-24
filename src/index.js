const round = type => (x, precision) => {
  if (typeof x !== 'number') { throw new TypeError('Expected value to be a number'); }
  return Number(Math[type](`${x}e${Math.abs(precision)}`) + `e-${Math.abs(precision)}`);
};

const nearest = type => (x, number) => {
  if (typeof x !== 'number') { throw new TypeError('Expected value to be a number'); }
   return Number(Math[type](x / number) * number);
};

export const to = nearest('round');
export const near = nearest('round');
export const next = nearest('ceil');
export const prev = nearest('floor');
export const up = round('ceil');
export const down = round('floor');
export default round('round');

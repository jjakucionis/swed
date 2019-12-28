export default {
  linear(t) {
    return t;
  },
  easeInQuad(t) {
    return t * t;
  },
  easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic(t) {
    const tm = t - 1;
    return tm * tm * tm + 1;
  },
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart(t) {
    const tm = t - 1;
    return 1 - tm * tm * tm * tm;
  },
  easeInOutQuart(t) {
    const tm = t - 1;
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * tm * tm * tm * tm;
  },
  easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint(t) {
    const tm = t - 1;
    return 1 + tm * tm * tm * tm * tm;
  },
  easeInOutQuint(t) {
    const tm = t - 1;
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * tm * tm * tm * tm * tm;
  },
};
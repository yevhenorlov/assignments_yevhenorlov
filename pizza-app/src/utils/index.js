// TODO: redo as a separate utility method (extending native prototypes is not a
// good idea)
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

export function updateClock(clock) {
  var d = new Date(),
    h = d.getHours().pad(),
    m = d.getMinutes().pad(),
    s = d.getSeconds().pad(),
    time = `${h}:${m}:${s}`;
  clock.innerHTML = time;
}

window.setInterval(() => {
  updateClock(clock);
}, 500);

export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};

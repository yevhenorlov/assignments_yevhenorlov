"use strict;";

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

{
  const clock = document.getElementById("clock");

  function updateClock(clock) {
    var d = new Date(),
      h = d.getHours().pad(2),
      m = d.getMinutes().pad(2),
      s = d.getSeconds().pad(2),
      time = `${h}:${m}:${s}`;
    clock.innerHTML = time;
  }

  window.setInterval(() => {
    updateClock(clock);
  }, 500);
}

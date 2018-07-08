export function classPicker(def, opt1, opt2, con) {

  return def + " " + (con ? (def + "--" + opt1) : (def + "--" + opt2));
}

export function invert(con) {
  return (con ? "img-invert" : "");
}

//translates camelCase to Regular Form
export function translate(s) {
  return s.split(/(?=[A-Z])/).map(function(p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
  }).join(' ');
}
export default function pigIt(str) {
  return str
    .split(' ')
    .map(el => {
      if (!el.includes("1")&&!el.includes("?")) {
        return el.split('').slice(1).join('') + el.split('')[0] + 'ay';
      }
      return el;
    })
    .join(' ');
}

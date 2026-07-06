const fs = require('fs');
const vm = require('vm');
const path = require('path');
const data = fs.readFileSync(path.join('js', 'data.js'), 'utf8');
const main = fs.readFileSync(path.join('js', 'main.js'), 'utf8');

const makeElement = () => ({
  addEventListener: () => {},
  querySelectorAll: () => [],
  querySelector: () => null,
  getContext: () => ({
    clearRect: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
    arc: () => {},
    fill: () => {},
    clearRect: () => {},
    fillStyle: '',
    strokeStyle: ''
  }),
  innerHTML: '',
  classList: {
    add: () => {},
    remove: () => {},
    toggle: () => false
  },
  scrollIntoView: () => {},
  style: {},
  dataset: {},
  appendChild: () => {},
  removeChild: () => {},
  click: () => {}
});

const sandbox = {
  console,
  addEventListener: () => {},
  matchMedia: () => ({ matches: false }),
  document: {
    body: makeElement(),
    getElementById: (id) => makeElement(),
    querySelector: () => null,
    querySelectorAll: () => []
  },
  requestAnimationFrame: (fn) => setTimeout(fn, 0),
  performance: { now: () => Date.now() },
  IntersectionObserver: function (callback) {
    this.observe = () => {};
    this.unobserve = () => {};
  },
  setTimeout,
  clearTimeout,
  globalThis: {}
};

sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

try {
  vm.runInContext(data + '\nglobalThis.LIBRARY_DATA = LIBRARY_DATA;', sandbox);
  console.log('DATA ok', typeof sandbox.LIBRARY_DATA, sandbox.LIBRARY_DATA.topics && sandbox.LIBRARY_DATA.topics.length);
} catch (error) {
  console.error('DATA ERROR', error);
  process.exit(1);
}

try {
  vm.runInContext(main, sandbox);
  console.log('MAIN loaded');
} catch (error) {
  console.error('MAIN ERROR', error);
  process.exit(1);
}

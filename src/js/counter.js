class CounterPlugin {
  #value;
  #step;
  #refs;
  constructor({ rootSelector, initialValue = 0, step = 1 } = {}) {
    this.#value = initialValue;
    this.#step = step;
    this.#refs = this.#getRefs(rootSelector);
    this.#bindEvents();
  }

  #getRefs(rootSelector) {
    const refs = {};

    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector(
      '[data-action="increment"]'
    );
    refs.decrementBtn = refs.container.querySelector(
      '[data-action="decrement"]'
    );
    refs.value = refs.container.querySelector('#value');
    return refs;
  }

  #bindEvents() {
    this.#refs.incrementBtn.addEventListener('click', () => {
      this.#increment();
    });
    this.#refs.decrementBtn.addEventListener('click', () => {
      this.#decrement();
    });
  }

  #updateValue() {
    this.#refs.value.textContent = this.#value;
  }
  #increment() {
    this.#value += this.#step;
    this.#updateValue();
  }
  #decrement() {
    this.#value -= this.#step;
    this.#updateValue();
  }
}

const counter = new CounterPlugin({
  rootSelector: '#counter',
});
console.log(counter);

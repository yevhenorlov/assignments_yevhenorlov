import { Component } from '../Framework';

class PizzaQueue extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('div');
    this.host.classList.add('pizza-queue-container');
  }

  render() {
    return `
    <button class="btn--add-pizza">
      <span>
        <span class="icon" aria-hidden="true">🍕</span>
        Add new pizza
      </span>
    </button>
    <section class="pizzas">
      <div class="pizza">
        <img src="src/img/pizza1.jpg" alt="pizza1" class="pizza__picture">
        <time class="pizza__timestamp">10:52:03</time>
        <span class="pizza__queue-number">#1</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">1 min</time>
        </span>
        <span class="pizza__price">$3.40</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza2.jpg" alt="pizza2" class="pizza__picture">
        <time class="pizza__timestamp">10:53:23</time>
        <span class="pizza__queue-number">#2</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">2 min</time>
        </span>
        <span class="pizza__price">$3.50</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza3.jpg" alt="pizza3" class="pizza__picture">
        <time class="pizza__timestamp">10:54:02</time>
        <span class="pizza__queue-number">#3</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">4 min</time>
        </span>
        <span class="pizza__price">$3.30</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza4.jpg" alt="pizza4" class="pizza__picture">
        <time class="pizza__timestamp">10:55:54</time>
        <span class="pizza__queue-number">#4</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">5 min</time>
        </span>
        <span class="pizza__price">$4.20</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza5.jpg" alt="pizza5" class="pizza__picture">
        <time class="pizza__timestamp">10:56:13</time>
        <span class="pizza__queue-number">#5</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">11 min</time>
        </span>
        <span class="pizza__price">$3.50</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza6.jpg" alt="pizza6" class="pizza__picture">
        <time class="pizza__timestamp">10:56:22</time>
        <span class="pizza__queue-number">#6</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">12 min</time>
        </span>
        <span class="pizza__price">$3.30</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza7.jpg" alt="pizza7" class="pizza__picture">
        <time class="pizza__timestamp">10:56:45</time>
        <span class="pizza__queue-number">#7</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">13 min</time>
        </span>
        <span class="pizza__price">$2.99</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza8.jpg" alt="pizza8" class="pizza__picture">
        <time class="pizza__timestamp">10:57:31</time>
        <span class="pizza__queue-number">#8</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">13 min</time>
        </span>
        <span class="pizza__price">$3.41</span>
      </div>
      <div class="pizza">
        <img src="src/img/pizza9.jpg" alt="pizza9" class="pizza__picture">
        <time class="pizza__timestamp">10:57:59</time>
        <span class="pizza__queue-number">#9</span>
        <span class="pizza__eta">ETA:
          <time datetime="04:00">14 min</time>
        </span>
        <span class="pizza__price">$3.22</span>
      </div>
    </section>
    `;
  }
}

export default PizzaQueue;

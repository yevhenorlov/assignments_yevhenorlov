import { Component } from '../Framework';

class Skeleton extends Component {
  constructor(props) {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('spa-skeleton');
  }

  render() {
    return `
    <header>
    <div class="clock">
      <span class="icon" aria-hidden="true">🕙</span>
      <time id="clock"></time>
    </div>
    <a href="/" class="logo" aria-label="home">
      <img src="src/img/logo.png" alt="logo" class="logo__img">
    </a>
    <div class="login-signup">
    </div>
    </header>
    <main id="root">
    <button type="button" class="btn--login-signup">
      <span>
        <span class="icon" aria-hidden="true">🍳</span>
      Login / Signup
      </span>
    </button>
    </main>
    <footer>
    <address class="footer__address">
      <b>Kottans</b>, Kottans Str. 1,
      <a href="tel:577-788-87">tel. 577-788-87</a>
    </address>
    <small class="footer__copy">
      <b>Pizza Manager</b> &copy; 2018
    </small>
    </footer>
    `;
  }
}

export default Skeleton;

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
      <div class="authorization-container">
        <form id="login-form" action="">
          <input type="text" name="login" placeholder="login">
          <input type="password" name="password" placeholder="password">
          <button type="button" class="btn--login-signup">
            <span>
              <span class="icon" aria-hidden="true">🍳</span>
              Login
            </span>
          </button>
        </form>
        <form id="signup-form" class="hidden" action="">
          <input type="text" name="login" placeholder="login">
          <input type="password" name="password" placeholder="password">
          <button type="button" class="btn--login-signup">
            <span>
              <span class="icon" aria-hidden="true">🍳</span>
              Sign up
            </span>
          </button>
        </form>
      </div>

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

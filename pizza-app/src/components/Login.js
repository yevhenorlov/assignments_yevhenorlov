import { Component } from '../Framework';

class Login extends Component {
  constructor(props) {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('authorization-container');
    this.host.addEventListener('click', ev => {
      if (!ev.target.classList.contains('flip-btn')) return;
      this.host.classList.toggle('flipped');
    });
  }

  render() {
    return `
      <div class="authorization-container">
      <div class="authorization-container__inner">
        <form id="login-form" class="front" action="">
          <p>First time? <a href="#signup" class="flip-btn">Sign up.</a></p>
          <input type="text" name="login" placeholder="login">
          <input type="password" name="password" placeholder="password">
          <button type="button" class="btn--login-signup">
            <span>
              <span class="icon" aria-hidden="true">🍳</span>
              Log in
            </span>
          </button>
        </form>
        <form id="signup-form" class="back" action="">
          <p>Already have an account? <a href="#login" class="flip-btn">Log in.</a></p>
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
      </div>`;
  }
}

export default Login;
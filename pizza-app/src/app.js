import './scss/app.scss';
import { Component } from './Framework';
//import Skeleton from './components/skeleton';
import Login from './components/Login';
//import { updateClock } from './utils';
class App extends Component {
  constructor({ host }) {
    super();
    this.login = new Login();
    this.host = host;

  }
  render() {
    return this.login.update(); 
  }
}
/*
const clock = document.getElementById('clock');
updateClock();
*/
export default App;

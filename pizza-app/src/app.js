import './scss/app.scss';
import { Component } from './Framework';
//import Skeleton from './components/skeleton';
import Authorization from './components/authorization';
//import { updateClock } from './utils';
class App extends Component {
  constructor({ host }) {
    super();
    this.authorization = new Authorization();
    this.host = host;

  }
  render() {
    return this.authorization.update(); 
  }
}
/*
const clock = document.getElementById('clock');
updateClock();
*/
export default App;

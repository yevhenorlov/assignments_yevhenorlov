import './scss/app.scss';
import { Component } from './Framework';
import Skeleton from './components/skeleton';
//import { updateClock } from './utils';
class App extends Component {
  constructor({ host }) {
    super();

    this.host = host;

    this.skeleton = new Skeleton();
  }
  render() {
    return this.skeleton.update();
  }
}
/*
const clock = document.getElementById('clock');
updateClock();
*/
export default App;

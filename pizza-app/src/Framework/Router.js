import Component from './Component';
import { bindAll } from '../utils';

class Router extends Component {
  constructor(props) {
    super(props);

    const { host, routes } = props;

    this.host = props.host;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null,
    };

    bindAll(this, 'handleUrlChange', 'navigateTo');

    window.addEventListener('hashchange', () => {
      this.handleUrlChange(this.path);
    });
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;

    const nextRoute = routes.find(({ href }) => href === this.path);

    if (nextRoute && nextRoute !== currentRoute) {
      if (nextRoute.onEnter) {
        this.handleOnEnter(nextRoute);
        return;
      }
      if (nextRoute.redirectTo) {
        this.navigateTo(nextRoute.redirectTo);
        return;
      }
      this.updateState({
        activeComponent: new nextRoute.component(),
        currentRoute: nextRoute,
      });
      console.log(this.state);
    } else {
      console.log('route not found');
    }
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  handleOnEnter({ onEnter }) {
    onEnter(this.navigateTo);
  }

  render() {
    const { activeComponent } = this.state;
    return activeComponent.update();
  }
}

export default Router;

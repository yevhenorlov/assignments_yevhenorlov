import { Router } from './Framework';
import App from './App';
import routes from './routes';

const router = new Router({ host: document.getElementById('root'), routes });
//const app = new App({ host: document.getElementById('root') });
//app.update();

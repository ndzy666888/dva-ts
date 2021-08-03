import dva from 'dva';
import { message } from 'antd';
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import './index.css';
import routers from './routes';
import model from './routes/model';
import reportWebVitals from './reportWebVitals';

const app = dva({
  // history: createHistory(),
  onError(e) {
    message.error(e.message, 3).then(r => console.log(r));
  },
});
app.use(createLoading({}));
app.model(model);
app.router(routers);
app.start('#root');

reportWebVitals();

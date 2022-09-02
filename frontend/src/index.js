import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/index';
import App from './App';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom"
import Loader from './components/atoms/Loader';
import history from './history';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
const Home = lazy(() => import('./components/pages/home'));
const Login = lazy(()=>import('./components/pages/login'));

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </HistoryRouter>
  </Provider>
)

// reportWebVitals(console.log);

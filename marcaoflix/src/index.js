import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PaginaCadastroVideo from './pages/cadastro/video';
import PaginaCadastroCategoria from './pages/cadastro/categoria';

function Pagina404 () {
  return (
    <p>Página não encontrada</p>
  );
}

ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/cadastro/video/" component={PaginaCadastroVideo} exact></Route>
      <Route path="/cadastro/categoria/" component={PaginaCadastroCategoria} exact></Route>
      <Route component={Pagina404}></Route>
    <App />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


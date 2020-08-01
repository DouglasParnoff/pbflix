import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
//react-router-dom/cjs/react-router-dom.min

const Pagina404 = () => (<div>Erro: Não existe esta página. Volte para a <a href="/"> Home</a> </div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import Axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import {Context} from './context';
import reducer from './reducer';

import {Home, Catalog, Product} from './pages';

import './styles/main.css';
import {NavBar} from './Components';

function App() {
  const [state, dispatch] = React.useReducer(reducer, JSON.parse(localStorage.getItem('products')));

  React.useEffect(() => {
    Axios.get('https://api.jsonbin.io/b/5ffecaa268f9f835a3dea630').then(res => localStorage.setItem('products', JSON.stringify(res.data)));
  }, []);

  return (
    <Context.Provider value={{}}>
      <div className="App">
        <NavBar />
        <div style={{marginTop: 70, paddingLeft: 10, paddingRight: 10}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" render={() => <Catalog state={state} />} />
            <Route path="/catalog/:id" render={(routerProps) => <Product state={state} id={routerProps.match.params.id} />} />
          </Switch>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

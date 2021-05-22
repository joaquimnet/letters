import { HashRouter, Route, Switch } from 'react-router-dom';
import { Read } from './Read';

import { Write } from './Write';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact>
          <Write />
        </Route>
        <Route path='/:slug' exact>
          <Read />
        </Route>
      </Switch>
      <div className='background-container'>
        <div className='background'></div>
        <div className='background2'></div>
      </div>
    </HashRouter>
  );
}

export default App;

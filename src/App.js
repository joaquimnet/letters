import { HashRouter, Route, Switch } from 'react-router-dom';

import { Read } from './Read/Read';
import { Write } from './Write/Write';
import { Background } from './Background/Background';

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
      <Background />
    </HashRouter>
  );
}

export default App;

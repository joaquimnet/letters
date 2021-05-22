import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Write } from './Write';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Write />
        </Route>
      </Switch>
      <div className='background-container'>
        <div className='background'></div>
        <div className='background2'></div>
      </div>
    </BrowserRouter>
  );
}

export default App;

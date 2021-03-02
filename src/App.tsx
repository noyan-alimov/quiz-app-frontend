import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import CreateQuiz from './pages/CreateQuiz/CreateQuiz';
import Home from './pages/Home/Home';
import { appStoreContext } from './AppStore';
import { observer } from 'mobx-react';

const App = observer(() => {
  const appStore = React.useContext(appStoreContext)

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/createQuiz' render={props => (
          <CreateQuiz {...props} store={appStore.createQuizStore} />
        )} />
      </Switch>
    </BrowserRouter>
  );
})

export default App;

import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';

function App() {

  return (
    <div className="App">

      <Route exact path='/' render={() => <Landing />} />
      <Route exact path='/home' render={() => <Home />} />
      <Route exact path='/dog/:id' component={Detail} />
      <Route exact path='/create' render={() => <Create />} />

    </div>
  );
}

export default App;

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomeComponent from './components/HomeComponent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import AddComponent from './components/AddComponent';
import EditComponent from './components/EditComponent';
import NavComponent from './components/NavComponent';



function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <NavComponent />
        <hr />
        <Switch>
          <Route exact path="/" component={HomeComponent } />
          <Route exact path="/add" component={AddComponent } />
          <Route exact path="/edit/:id" component={EditComponent } />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

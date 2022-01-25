
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './Components/Form';
import PlanentResults from './Components/PlanentResults';
function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <BrowserRouter>
      <Form/>
          <Switch>
            <Route exact path='/:category/:id'>
            <PlanentResults/>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

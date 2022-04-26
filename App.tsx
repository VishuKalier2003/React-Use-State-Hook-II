import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { LoggedIn } from './components/State/LoggedIn'
import { User } from './components/State/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoggedIn></LoggedIn>
        <User></User>
        </header>
    </div>
  );
}

export default App;

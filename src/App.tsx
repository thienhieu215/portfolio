import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;

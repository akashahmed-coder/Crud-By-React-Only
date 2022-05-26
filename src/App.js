import './App.css';
import { DataProvider } from './components/GlobalState';
import { BrowserRouter as Router } from 'react-router-dom'
import Pages from './components/mainpage/Pages';

function App() {
  return (
    <DataProvider>
    <Router>
    <div className="App">
   <Pages/>
    </div>
    </Router>
    </DataProvider>
  );
}

export default App;

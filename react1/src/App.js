import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Daf from './Daf';
import Welcome from './Welcome';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Daf />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
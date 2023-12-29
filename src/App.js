
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Homepage from './pages/Homepage';
import AddEmployee from './user/AddEmployee';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
          <Route exact path="/addemployee" element={<AddEmployee />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

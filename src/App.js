import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllVisitor from './components/ViewAllVisitor';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddVisitor />} />
          <Route path='/view' element={<ViewAllVisitor />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import { Routes , Route } from 'react-router';

function App() {
  return (
    <div>
      <Header></Header>
      <div class="head">
        <Home></Home>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

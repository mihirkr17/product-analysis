import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Home from './Components/Home';
import Reviews from './Components/Reviews';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </>
  );
}

export default App;

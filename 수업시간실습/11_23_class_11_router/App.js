import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import UserList from './component/UserList';
import About from './component/About';
import UserDetail from './component/UserDetail';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<UserList />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<UserDetail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

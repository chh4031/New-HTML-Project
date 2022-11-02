import logo from './logo.svg';
import './App.css';
import TestHooks from './component/testHooks';
import Userlist from './component/userlist';
import Userlist2 from './component/Userlist2';

function App() {
  return (
    <div className="App">
     {/* <TestHooks></TestHooks> */}
     <Userlist></Userlist>
     <Userlist2></Userlist2>
    </div>
  );
}

export default App;

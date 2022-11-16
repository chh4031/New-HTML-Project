import logo from './logo.svg';
import './App.css';
import Header from './com/cm';
import H_1 from './com/h_1';
import H_2 from './com/h_2';
import P_1 from './com/p_1';
import Footer from './com/mc';

function App() {
  return (
    <div className="App">
      {/* 각 태그들을 리엑트 컴포넌트로 만들어 재활용하는 형식 */}
      {/* 모든 컴포넌트는 함수 형식으로 구성 */}
      <Header></Header>
      <H_1 name='Notice'></H_1>
      <P_1 name='10/20(목) 중간고사'></P_1>
      <H_1 name='Subject'></H_1>
      <H_2 name='HTML5 Programming'></H_2>
      <P_1 name='HTML, CSS, JavaScript'></P_1>
      <H_2 name='ES6 Progamming'></H_2>
      <P_1 name='JS Basic, Functional, Progamming'></P_1>
      <H_2 name='Recact Progamming'></H_2>
      <P_1 name='Elemnents, Components'></P_1>
      <Footer></Footer>
    </div>
  );
}

export default App;

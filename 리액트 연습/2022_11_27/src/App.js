// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; //useState 같은 것을 Hook이라함. 훅은 리엑트에서 제공하는 기본 함수

function Header(props){
  // console.log('props', props, props.title);
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();//클릭해도 리로드(웹페이지)가 되지 않겠금 하는거임!
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = [];

  for(let i = 0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));//target은 event를 유발시킨 태그를 가리킴. a태그임. 그 a 태그의 id값을 가리킴,id값이 태그에 있으면 문자열이 됨.
      }}>{t.title}</a>
      </li>)
  };

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Artcile(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='title'/></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><input type='submit' value='Create'></input></p>
    </form>
  </article>
}

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='title' value={title} onChange={(event)=>{
        // console.log(event.target.value);
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name='body' placeholder='body' value={body} onChange={(event)=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type='submit' value='Update'></input></p>
    </form>
  </article>
}

function App() {

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextid] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'HTML', body:'html is ...'},
    {id:2, title:'CSS', body:'css is ...'},
    {id:3, title:'JS', body:'js is ...'}
  ]);

  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME'){
    content = <Artcile title="Welcome" body="HELLO, WEB"></Artcile>

  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      // console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Artcile title={title} body={body}></Artcile>
    contextControl = <>
    <li><a href={'/update/' + id} onClick={(event)=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    <li><input type='button' value='Delete' onClick={()=>{
      const newTopics = []
      for(let i=0; i<topics.length;i++){
        if(topics[i].id !== id){
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}/></li>
    </>

  }else if(mode === 'CREATE'){
    content=<Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextid(nextId+1);
    }}></Create>

  }else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      // console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(_title, _body)=>{
      // console.log(title, body);
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:_title, body:_body}
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href='/create' onClick={(event)=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;

// useState 사용에서의 객체나 배열 즉 범 객체의 값이 초기값이나 변환변수로 사용될 경우
// 복제본을 사용하는 것으로 해야한다. {...value}와 같이 복제본을 만드는 것으로 사용함.
// 상태를 만들때 string, number, boolean, null, undefined와 같은 PRIMITIVE 타입이면
// 예전의 방식 그대로 복제없이 사용해도 된다. 

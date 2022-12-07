import React from 'react';
import styles from '../style/Page.module.css'
import { useState } from 'react';
import Write from './Write';
import myList from '../data/list_data.json'
// import Updatelist from './Updatelist';

function Page(props) {

    // const myList = [
    //     {title:'title1', content:'content1'},
    //     {title:'title2', content:'content2'},
    //     {title:'title3', content:'content3'}
    // ]

    const [Plist, setList] = React.useState(myList.myList);
    // const [able, setable] = useState(false);
    // const [mode, setmode] = useState('create');
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');

    function addList(title, content){
        const newList = [...Plist, {title:title, content:content, complete: false}]
        // console.log(newList);
        setList(newList);
    }

    function deleteList(index){
        const newList = Plist.filter((item, index_1)=>index_1 !== index);
        setList(newList);
    }
    const updateTodoItem = (index) => {
        const newTodoItems = [...Plist];
        const newlist = newTodoItems[index];
        let newTitle = prompt(`${newlist.title}를 수정하시겠습니까?`, newlist.title);
        let newContent = prompt(`${newlist.content}를 수정하시겠습니까?`, newlist.content);
        let todoObj = { content: newContent, title: newTitle, complete: false };
        newTodoItems.splice(index, 1, todoObj);
            return setList(newTodoItems);

    };

    return (
        <div className={styles.border}>
            <table className={styles.table_size}>
                <tbody>
                <tr>
                    <th className={`${styles.border} ${styles.title_size}`}>제목</th>
                    <th className={`${styles.border} ${styles.content_size}`}>내용</th>
                    <th colSpan='2' className={`${styles.border} ${styles.col}`}>작업</th>
                </tr>
                {Plist.map((item, index)=>
                <tr key={index} className={styles.list_border}>
                    <td className={styles.list_border}>{item.title}</td>
                    <td className={styles.list_border}>{item.content}</td>
                    <td><button className="btn btn-primary"  onClick={()=>updateTodoItem(index)}>수정</button></td>
                    <td><button className="btn btn-danger"  onClick={()=>deleteList(index)}>삭제</button ></td>
                </tr>)}

                {/* <tr>
                    <th>{myList[0].title}</th>
                    <th>{myList[0].content}</th>
                </tr> */}
                </tbody>
            </table>

            <Write onAdd={addList}></Write>
        </div>
    );
}

export default Page;
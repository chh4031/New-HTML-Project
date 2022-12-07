import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../style/Write.module.css'

function Write(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function changeTitle(event){
            return setTitle(event.target.value);
    }

    function changeContent(event){
            return setContent(event.target.value);
    }

    function Ysubmit(event){
        event.preventDefault();
        props.onAdd(title, content)
    }

    return (
        <div>
            <Form onSubmit={(event)=>Ysubmit(event)}>
                <label>
                    <b>제목</b><br></br>
                    <input type="text" maxlength="12" className="form-control" value={title} onChange={(event)=>changeTitle(event)}></input>
                </label>
                <br></br>
                <label>
                    <b>내용</b><br></br>
                    <textarea rows="2" cols="50" maxlength="33" className={styles.textarea_css} value={content} onChange={(event)=>changeContent(event)}></textarea>
                </label>
                <br></br>
                <input type="submit" value="추가"></input>
            </Form>
            <p></p>
        </div>
    );
}

export default Write;
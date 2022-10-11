import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import styled from 'styled-components';

const AddForm = () => {
    const [todo, setTodo] = useState({
        title: "",
        body: "",
    });
    
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        const { name, value } = e.target;
        setTodo({...todo, [name]: value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(todo.title.trim() === '' || todo.body.trim() === ''){
            return;
        }
        
        dispatch(addTodo(todo));
        setTodo({
            title: '',
            body: '',
        })
    }
    
    return(
        <FormTop onSubmit={onSubmitHandler}>
            <FormLists>
                <FormInputDiv className="inputs">
                    <FormLabels>제목</FormLabels>
                    <FormInputs type="text" name="title" value={todo.title} onChange={onClickHandler} />
                </FormInputDiv>
                <FormInputDiv className="inputs">
                    <FormLabels>내용</FormLabels>
                    <FormInputs type="text" name="body" value={todo.body} onChange={onClickHandler} />
                </FormInputDiv>
            </FormLists>            
            <FormBtn>추가하기</FormBtn>
        </FormTop>
    )
}

export default AddForm;

const FormTop = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #e1e1e1;
    border-radius: 12px;
    padding: 20px 30px;
`

const FormLists = styled.div`
    display: flex;
    align-items: center;
`

const FormInputs = styled.input`
    border: none;
    border-radius: 10px;
    width: 250px;
    height: 40px;
    line-height: 50px;
    box-sizing: border-box;
    display: inline-block;
    padding-left: 10px;
`

const FormBtn = styled.button`
    border: none;
    background: skyblue;
    color: #fff;
    font-weight: bold;
    width: 130px;
    height: 40px;
    border-radius: 12px;
    cursor: pointer;
`

const FormInputDiv = styled.div`
    margin-right: 15px;
`

const FormLabels = styled.label`
    margin-right: 15px;
`
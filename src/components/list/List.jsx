import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";

const List = () => {
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const onToggle = (id) => {
        dispatch(toggleStatusTodo(id));
    }

    const onUpdate = () => {
        
    }

    return(
        <>
            <h1>Working</h1>
            <ListAll>
                {todos.map((list) =>{
                    if(!list.isDone){
                        return(
                            <ListBox key={list.id}>
                                <div>
                                    <Link to={`/detail/${list.id}`} key={list.id}>
                                        <p>상세보기</p>
                                    </Link>
                                </div>
                                <div>
                                    <h3>{list.title}</h3>
                                    <p>{list.body}</p>
                                </div>
                                <AllBtn className="btns">
                                    <BtnDelete onClick={() => onDelete(list.id)}>삭제하기</BtnDelete>
                                    <BtnToggles onClick={() => onToggle(list.id)}>
                                        {list.isDone ? "취소하기" : "완료하기"}
                                    </BtnToggles>
                                </AllBtn>
                            </ListBox>
                        )
                    }else{
                        return null;
                    }
                })}
            </ListAll>
            <h1>Done</h1>
            <ListAll>
                {todos.map((list) => {
                    if(list.isDone){
                        return(
                            <ListBox key={list.id}>
                                <Link to={`/detail/${list.id}`} key={list.id}>
                                    <p>상세보기</p>
                                </Link>
                                <div>
                                    <h3>{list.title}</h3>
                                    <p>{list.body}</p>
                                </div>
                                <AllBtn className="btns">
                                    <BtnDelete onClick={() => onDelete(list.id)}>삭제하기</BtnDelete>
                                    <BtnToggles onClick={() => onToggle(list.id)}>
                                        {list.isDone ? "취소하기" : "완료하기"}
                                    </BtnToggles>
                                </AllBtn>
                            </ListBox>
                        )
                    }else{
                        return null;
                    }
                })}
            </ListAll>
        </>
    )
}

export default List;

const ListAll = styled.div`
    display: flex;
    gap: 20px;
    text-align: center;
`

const ListBox = styled.div`
    border: 3px solid skyblue;
    border-radius: 15px;
    box-sizing: border-box;
    width: 250px;
    padding: 30px;
    height: 220px;
`

const AllBtn = styled.div`
    display: flex;
    gap: 15px;
`

const BtnDelete = styled.button`
    border: 2px solid red;
    border-radius: 10px;
    background: transparent;
    color: red;
    font-weight: bold;
    cursor: pointer;
    width: 90px;
    height: 40px;
`

const BtnToggles = styled.button`
    width: 90px;
    height: 40px;
    border: 2px solid green;
    border-radius: 10px;
    background: transparent;
    color: green;
    cursor: pointer;
    font-weight: bold;
`
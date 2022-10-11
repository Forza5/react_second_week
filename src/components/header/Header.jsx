import React from "react";
import styled from 'styled-components';

const TodoTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border: 1px solid #ddd;
`

const Header = () => {
    return(
        <TodoTop>
            <h1>My Todo List</h1>
            <p>React</p>
        </TodoTop>
    )
}


export default Header;
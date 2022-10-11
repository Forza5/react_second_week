import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
    const lists = useSelector((state) => state.todos.todos);
    console.log(lists);

    let params = useParams();
    console.log(params);
    
    const navigate = useNavigate();
    const mainPage = () => {
        navigate('/');
    }

    const Details = lists.find((todo) => todo.id === +params.id);
    const { id, title, body } = Details;
    console.log(Details);

    return(
        <BoxAll>
            <BoxCont>
                <BtnBack>
                    <p>ID: {id}</p>
                    <BtnMain onClick={mainPage}>이전으로</BtnMain>
                </BtnBack>
                <div>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            </BoxCont>
        </BoxAll>
    )
}

export default Detail;

const BoxAll = styled.div`
    border: 2px solid #ddd;
    height: 100vh;
    position: relative;
`

const BoxCont = styled.div`
    border: 3px solid #eee;
    text-align: center;
    width: 40%;
    padding: 40px;
    box-sizing: border-box;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

const BtnBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BtnMain = styled.button`
    background: transparent;
    width: 120px;
    height: 40px;
    font-weight: bold;
    border-radius: 10px;
    border: 2px solid #777;
    cursor: pointer;
`
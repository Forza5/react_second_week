//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//Initial State
const initialState = {
    todos: [
        {
            id: 1,
            title: "과제 난이도 말이 됨?",
            body: "말이 안됨",
            isDone: false,
        },
        {
            id: 2,
            title: "아아",
            body: "우우",
            isDone: false,
        }
    ]
}

//Action Creator
let newId = 2;
export const addTodo = (payload) => {
    console.log(payload)
    return {
        type: ADD_TODO, 
        todo: {
            id: newId += 1,
            title: payload.title,
            body: payload.body,
            isDone: false,
        }
    }
}

export const deleteTodo = (payload) => {
    return{
        type: DELETE_TODO, payload
    }
}

export const toggleStatusTodo = (payload) => {
    return{
        type: TOGGLE_STATUS_TODO, payload
    }
}

//Reducer
const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo],
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todoItem) => 
                    todoItem.id !== action.payload
                )]
            }
        case TOGGLE_STATUS_TODO:
            console.log(action.payload)
            return {
                ...state,
                todos: [...state.todos.map((todo) => 
                    todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
                    )
                ]
            }
        default:
            return state;
    }
}

export default todos;
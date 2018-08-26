import {combineReducers} from 'redux'
import {ADD_TODO, DELETE_ITEM, UPDATE_DEVELOPER_FIELD, UPDATE_PROJECT_FIELD} from '../actions/types/types'
import store from "../store/store";

const inputFields = (state={developer:'',project:''}, action)=>{
    switch (action.type) {
        case UPDATE_PROJECT_FIELD:
            return {...state, project:action.text};
        case UPDATE_DEVELOPER_FIELD:
            return {...state, developer:action.text};
        default:
            return state
    }
};

const todos = (state = [], action, inputFields) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {...inputFields}];
        case DELETE_ITEM:
            const newState = [...state];
            newState.splice(action.index, 1);
            return newState;
        default:
            return state
    }
};

const todoApp = (state={}, action)=>({
    todos: todos(state.todos, action, state.inputFields),
    inputFields: inputFields(state.inputFields, action)
});

export default todoApp
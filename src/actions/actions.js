import {ADD_TODO, UPDATE_DEVELOPER_FIELD, UPDATE_PROJECT_FIELD, DELETE_ITEM} from './types/types'

export const addTodo = () => {
    return {
        type: ADD_TODO
    }
};

export const deleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        index
    }
};

export const updateProjectField = (text) => {
    return {
        type: UPDATE_PROJECT_FIELD,
        text
    }
};

export const updateDeveloperField = (text) => {
    return {
        type: UPDATE_DEVELOPER_FIELD,
        text
    }
};


import { atom } from 'recoil';

// state holding list of todo items
const todoListState = atom({
    key: 'TodoList',
    default: []
});

export {
    todoListState
}
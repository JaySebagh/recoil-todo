import { useRecoilValue } from 'recoil';

import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { todoListState } from '../recoil_state';

function TodoList(){
    const todoList = useRecoilValue(todoListState);

    // display the item creator and all the items in the todoList state
    return (
        <>
            <div style={{ display: 'flex', gap: '10px' }}>
                <TodoItemCreator />
            </div>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    )
}

export default TodoList;
import { useRecoilState } from 'recoil';

import { todoListState } from '../recoil_state';

const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    // edit an item in the list by replacing the item using slice
    const editItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value
        });

        setTodoList(newList);
    };

    // same as editItemText but instead of changing the text value, change the toggle
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete
        });

        setTodoList(newList);
    };

    // remove the item from the list using slice
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input
                type="text"
                value={item.text}
                onChange={editItemText}
            />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    )
};

export default TodoItem;
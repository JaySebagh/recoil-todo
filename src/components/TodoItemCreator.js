import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from '../recoil_state';

// increment ID when called to create a unique ID
let id = 0;
function getId(){
    return id++;
};

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodolist = useSetRecoilState(todoListState);
    
    // add a new entry to the todoList state
    const addItem = () => {
        setTodolist((oldTodoList) => [
            // spread the previous state items
            ...oldTodoList,
            // append a new item to the state using a unique id
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ]);
        // reset the input to blank
        setInputValue("");
    };
    
    // handle input change
    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };
    
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={onChange}
            />
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default TodoItemCreator;
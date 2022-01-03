import { ItemProps } from '../types';

const Item = ({
    text,
    id,
    isCompleted,
    deleteItem,
    editItem,
    checkItem,
}: ItemProps) => {
    return (
        <div>
            <input
                type='checkbox'
                checked={isCompleted}
                onChange={() => checkItem(id)}
            />
            {text}
            <button onClick={() => editItem(id, 'EDITED CONTENT')}>Edit</button>
            <button onClick={() => deleteItem(id)}>Delete</button>
        </div>
    );
};

export default Item;

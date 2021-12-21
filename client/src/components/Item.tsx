interface ItemProps {
    text: string;
    id: string;
    isCompleted: boolean;
    deleteItem: (id: string) => void;
    editItem: (id: string, content: string) => void;
}

const Item = ({ text, id, isCompleted, deleteItem, editItem }: ItemProps) => {
    return (
        <div>
            {text}
            <button onClick={() => editItem(id, 'EDITED CONTENT')}>Edit</button>
            <button onClick={() => deleteItem(id)}>Delete</button>
        </div>
    );
};

export default Item;

interface ItemProps {
    text: string;
    id: string;
    isCompleted: boolean;
}

const Item = ({ text, id, isCompleted }: ItemProps) => {
    const deleteItem = (id: string) => {
        console.log(id);
    };

    return (
        <div>
            {text}
            <button onClick={() => deleteItem(id)}>X</button>
        </div>
    );
};

export default Item;

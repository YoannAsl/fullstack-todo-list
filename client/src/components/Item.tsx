const Item = ({ text, id }: { text: string; id: string }) => {
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

import { useEffect, useState } from 'react';
import Item from './Item';

interface ItemType {
    _id: string;
    content: string;
    isCompleted: boolean;
}

const List = () => {
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/list')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const deleteItem = (id: string) => {
        fetch(`http://localhost:5000/list/${id}`, { method: 'DELETE' });
        const newList = items.filter((item) => item._id !== id);
        setItems(newList);
    };

    const editItem = (id: string, content: string) => {
        fetch(`http://localhost:5000/list/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        });
    };

    return (
        <div>
            {items.map((item) => (
                <Item
                    key={item._id}
                    text={item.content}
                    id={item._id}
                    isCompleted={item.isCompleted}
                    deleteItem={deleteItem}
                    editItem={editItem}
                />
            ))}
        </div>
    );
};

export default List;

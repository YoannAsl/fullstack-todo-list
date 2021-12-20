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

    return (
        <div>
            {items.map((item) => (
                <Item
                    key={item._id}
                    text={item.content}
                    id={item._id}
                    isCompleted={item.isCompleted}
                />
            ))}
        </div>
    );
};

export default List;

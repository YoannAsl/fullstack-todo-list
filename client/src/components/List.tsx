import { useEffect, useState } from 'react';
import Item from './Item';

const List = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {}, []);

    return (
        <div>
            {items.map((item, index) => (
                <Item key={index} text='item' id='id' />
            ))}
        </div>
    );
};

export default List;

import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newItem = { content: inputValue, isCompleted: false };

        try {
            await axios.post('http://localhost:5000/list', newItem);
        } catch (e) {
            console.error(e);
        }
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <button type='submit'>Add new item</button>
        </form>
    );
};

export default Form;

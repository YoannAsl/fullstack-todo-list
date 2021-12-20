import { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newItem = { content: inputValue, isCompleted: false };
        setInputValue('');

        try {
            await fetch(`http://localhost:5000/list`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem),
            });
        } catch (e) {
            console.error(e);
        }
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

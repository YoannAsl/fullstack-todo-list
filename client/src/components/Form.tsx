import { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
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

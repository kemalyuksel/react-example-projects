import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function TodoForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTodo.trim() !== '') {
            addTodo(newTodo);
            setNewTodo('');
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button variant="success m-1" type="submit" className="btn-add">Add</Button>
            </form>
        </div>
    )
}

export default TodoForm

import React, { useState } from 'react'
import './CreateNewTask.css'
import addBtn from '../TodoListImg/addBtn.webp'

const CreateNewTask = () => {
const [input, setInput] = useState({
    userInput: '',
    tasks: [],
});
const handleAddTask = (e) => {
    e.preventDefault();
    console.log("CLICKED");
    if (input.userInput.trim() !== '') {
        setInput({
            ...input,
            tasks: [...input.tasks, input.userInput],
            userInput: ''
        });
    }
}

return (
    <form id='createTask' name='createTask'>
        <section id='createTaskContainer'>
            <input type="text" placeholder='Create New Task'
            value={input.userInput}
            onChange={(e) => setInput({...input,
            userInput: e.target.value
            })} />
            <img src={addBtn} alt="Add Todo" onClick={handleAddTask}/>
        </section>
        <section id="newTask">
            <p>This is where your input task should pop up</p>
            <ul>
                {input.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </section>
    </form>
)
}

export default CreateNewTask

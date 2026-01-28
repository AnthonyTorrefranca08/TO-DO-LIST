import React, { useState } from 'react'
import './CreateNewTask.css'
import addBtn from '../TodoListImg/addBtn.png'

const CreateNewTask = () => {
const [input, setInput] = useState({
    userInput: '',
    tasks: [],
    isActive: false,
});
const showHide = (e) => {
    e.preventDefault();
    setInput(prev => ({
        ...prev,
        isActive: !prev.isActive,
    }));
    console.log(input.isActive);
}

const transition = input.isActive ? "active" : "";

return (
    <form id='createTask' name='createTask' onSubmit={showHide}>
        <section id="createTaskContainer">
            
            <input type="checkbox" className={transition} />

            <input type="text" placeholder='Create New Task'
                    className={transition}
                    value={input.userInput}
                    onChange={(e) =>
                        setInput({
                            ...input,
                            userInput: e.target.value
            })}/>

            <section id="addTask" className={transition}>
                
                <img src={addBtn} id='addBtn' alt="Add Todo" 
                className={transition}
                onClick={showHide}/>

                <p className={transition}>Click to add task</p>
            
            </section>
        </section>
    </form>
)
}

export default CreateNewTask

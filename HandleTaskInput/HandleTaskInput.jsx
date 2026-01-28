import React, { useState } from 'react'
import './HandleTaskInput.css'
import addBtn from '../TodoListImg/addBtn.png'

const HandleTaskInput = () => {
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
    }
    
    const testing = (e) => {
        e.preventDefault();
        console.log(input.userInput);
    }

    const transition = input.isActive ? "active" : "";

return (
    <form id='createTask' name='createTask' onSubmit={testing}>
        <section id="createTaskContainer">
            <input type="checkbox" className={transition} />

            <input type="text" placeholder='Create New Task'
                className={transition}
                value={input.userInput}
                onChange={(e) =>
                setInput({...input,
                    userInput: e.target.value
            })}/>

            <section id="inputTask" className={transition}>
                <img src={addBtn} id='addBtn' alt="Add Todo" 
                    className={transition}
                    onClick={showHide}
                />

                <p className={transition}>Click to add task</p>
            </section>
        </section>
    </form>
)
}

export default HandleTaskInput

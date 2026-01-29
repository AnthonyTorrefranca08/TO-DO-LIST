import React, { useState } from 'react'
import './HandleTaskInput.css'
import addBtn from '../TodoListImg/addBtn.png'

const HandleTaskInput = () => {
    const [input, setInput] = useState({
        userInput: '',
        task: '',
        isActive: false,
        isCheck: false,
    });

    const showHide = (e) => {
        e.preventDefault();
        const addBtnVal = !input.isActive;
        setInput(prev => ({
            ...prev,
            isActive: !prev.isActive,
        }));

        if(!addBtnVal){
            setInput(prev =>({
                ...prev, 
                userInput: ""
            }))
        }

        if(input.isCheck === true && !addBtnVal){
            setInput(prev =>({
                ...prev,
                isCheck: !prev.isCheck
            }))
        }

            console.log("Current addBtn value", addBtnVal, input.userInput);
    }
    
    const handleInput = (e) => {
        e.preventDefault();
        if (input.userInput.trim() === "")
            return;
        console.log(input.userInput);
    }

    const handleChecked = () =>{
        const isChecked = !input.isCheck;
        setInput(prev => ({
            ...prev,
            isCheck: isChecked,
        }))
        console.log("Current checkbox value", isChecked, input.userInput);
    }

    const transition = input.isActive ? "active" : "";

return (
    <form id='createTask' name='createTask' onSubmit={handleInput}>
        <section id="createTaskContainer">
            <input type="checkbox" className={transition} 
            checked={input.isCheck} onChange={handleChecked} 
            disabled={input.userInput.trim() === ""}/>

            <input type="text" placeholder='Create New Task' 
                className={transition}
                value={input.userInput}
                onChange={(e) =>setInput({
                    ...input,
                    userInput: e.target.value
            })}/>

            <section id="addSection" className={transition}>
                <img src={addBtn} id='addBtn' alt="Add Todo" 
                    className={transition}
                    onClick={showHide}
            />
                <p className={transition}>Click to add task</p>
            </section>
            <ol>
                {setInput.task.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                    </li>
                )}
            </ol>
        </section>
    </form>
)
}

export default HandleTaskInput

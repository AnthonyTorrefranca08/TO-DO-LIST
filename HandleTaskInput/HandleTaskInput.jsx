import React, { useState } from 'react'
import './HandleTaskInput.css'
import addBtn from '../TodoListImg/addBtn.png'


export default function HandleTaskInput() {
    const [input, setInput] = useState({
        userInput: '',
        isActiveTernary: false,
    });

    const showHide = (e) => {
        e.preventDefault();
    const addBtnVal = !isActiveTernary;
    // toggles the ternary
        setInput(prev => ({
            ...prev,
            isActiveTernary: !isActiveTernary,
        }));
    // makes the input value to ''
        if(!addBtnVal){
            setInput(prev =>({
                ...prev, 
                userInput: '',
            }))
        }
        console.log("Current addBtn value", addBtnVal);
    }

    const handleInput = (e) => {
        e.preventDefault();
    // won't submit the checkbox when userInput ''
        if (inputBlank)
            return;
        if (inputBlank){
            setInput(prev => ({
                ...prev,
                isActiveTernary: prev.isActiveTernary,
            }));
            console.log(userInput);
        }
    // won't log the userInput when input = ''
        if (inputBlank)
            return;
        console.log(userInput);
        }

    const handleAddTask = () =>{
    // won't submit the checkbox when userInput ''
        if (inputBlank)
            return;
        if(!addBtnVal){
            setInput(prev =>({
                ...prev, 
                userInput: '',
                isActiveTernary: false,
            }))
            console.log(addBtnVal)
        }
    // toggles everything back to baseline
        if (handleAddTask){
            setInput(prev => ({
                ...prev,
                userInput: '',
                isActiveTernary: false,
            }))
        }
        if (!handleAddTask){
            setInput(prev=>({
                ...prev,
                userInput: ''
            }))
        }
            console.log(addBtnVal);
    }
    // variable extractions
        const isActiveTernary = input.isActiveTernary ? "active" : '';
        const userInput = input.userInput;
        const inputBlank = userInput.trim() === "";
        const addBtnVal = !isActiveTernary;

    return (
        <form id='createTask' name='createTask' onSubmit={handleInput}>
            <section id="createTaskContainer">
                <button className={isActiveTernary}
                onChange={handleAddTask}>ADD</button>

                <input type="text" placeholder='Create New Task' 
                    className={isActiveTernary}
                    value={userInput}
                    onChange={(e) =>setInput({
                        ...input,
                        userInput: e.target.value
                })}/>

                <section id="addSection" className={isActiveTernary}>
                    <img src={addBtn} id='addBtn' alt="List a new task to do" 
                        className={isActiveTernary}
                        onClick={showHide}
                    />
                    <p className={isActiveTernary}>Click to add task</p>
                </section>

                <ol>
                    
                </ol>

            </section>
        </form>
    )
}
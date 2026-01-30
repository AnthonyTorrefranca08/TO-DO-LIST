import React, { useState } from 'react'
import './HandleTaskInput.css'
import addBtn from '../TodoListImg/addBtn.png'


export default function HandleTaskInput() {
    const [input, setInput] = useState({
        userInput: '',
        isCheck: false,
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
    // ticks the checkbox
        if(isTogggle && !addBtnVal){
            setInput(prev =>({
                ...prev,
                isCheck: false,
            }))
        }
        console.log("Current addBtn value", addBtnVal);
    }

    const handleInput = (e) => {
        e.preventDefault();
    // won't log the userInput when ''
        if (inputBlank)
            return;
        console.log(userInput);
    }

    const handleChecked = () =>{
        const isChecked = !input.isCheck;
    // won't tick the checkbox when userInput ''
        if (inputBlank)
            return;
    // toggles everything back to baseline
        if (isChecked){
            setInput(prev => ({
                ...prev,
                userInput: '',
                isCheck: false,
                isActiveTernary: false,
            }))
        }
            console.log(userInput, isChecked);
    }
    // variable extractions
        const isActiveTernary = input.isActiveTernary ? "active" : "";
        const isTogggle = input.isCheck;
        const userInput = input.userInput;
        const inputBlank = userInput.trim() === "";

    return (
        <form id='createTask' name='createTask' onSubmit={handleInput}>
            <section id="createTaskContainer">
                <input type="checkbox" className={isActiveTernary} 
                checked={isTogggle} 
                onChange={handleChecked} 
                disabled={inputBlank}/>

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
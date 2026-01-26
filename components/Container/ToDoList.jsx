import React from 'react'
import './TodoList.css'
import CreateNewTask from '../CreateNewTask/CreateNewTask.jsx'

const toDoList = () => {
return (
    <section id='sectionContainer'>
        <section id="heading">
            <h1>Add New Task</h1>
        </section>
        <CreateNewTask />
    </section>
)}

export default toDoList

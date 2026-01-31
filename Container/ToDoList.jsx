import './TodoList.css'
import HandTaskInput from '../HandleTaskInput/HandleTaskInput'

const ToDoList = () => {
return (
    <section id='sectionContainer'>
        <section id="heading">
            <h1>Add New Task</h1>
        </section>
            <HandTaskInput />
        {/* <section id="newTask">

        </section> */}
    </section>
)}

export default ToDoList

import { useEffect, useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputvalue] =useState('')
  const [open, setOpen] = useState(false)
  const [selscted, setSelected] = useState('')
  useEffect(() =>{
    fetch('https://todo-a34a0-default-rtdb.firebaseio.com/erlan.json',{
      method:"POST",
      headers:{'Content-Type' : 'applicaion/json'},
      body:JSON.stringify(todo)
    },[todo])

  },[todo])
  const addTask =(id) => {
    if (!inputValue.trim()) return null
    setTodo([...todo, {
      id: Math.random().toString(),
      title: inputValue,
      date: new Date().toLocaleDateString()
    }])
    setInputvalue('')
    
  }
  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const deleteTask =(id)=> {
  
  openModal(true)
   setSelected(id)
  }

 
 
  return (
    <div className="App">
      <input value={inputValue} onChange={(event)=> setInputvalue (event.target.value.trimStart())} type="text" />
      <button onClick={addTask}  >ADD</button>
      {todo.map((item)=> <div key={item.id} >
        <li>{item.title} {item.date}  </li>
        <button onClick={()=>deleteTask(item.id)}   >delete</button>
      </div> )}
        <Modal onClose={closeModal} isOpen={open} todo={todo} setTodo={setTodo} id={selscted} />
    </div>
  );
}

export default App;

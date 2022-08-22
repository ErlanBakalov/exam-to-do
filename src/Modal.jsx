import React from "react";
import ReactDOM from 'react-dom'

export default function Modal({isOpen, setTodo, todo, id, onClose}) {
    const okDelete =()=> {
        setTodo([...todo].filter((item) => item.id!==id))
        onClose()
    }

    const noDelete =()=> {
      onClose() 
    }
  return (
    <>
      <div>
        {isOpen &&
          ReactDOM.createPortal(
            <div>
                <h1>Do you want to delete?</h1>
                <button onClick={okDelete} >Yes</button>
                <button onClick={noDelete} >No</button>
            </div>,
            document.getElementById("modal")
          )}
      </div>
    </>
  );
}
import React, { useState } from "react"; 

const ToDoList = () => {
    const [inputText, setInputText] = useState ("");
    const [toDos, setToDos] = useState([]);

    const handleInputChange = (e) => {
      setInputText(e.target.value);
    }

    const handleKeyDown = (e) => {
      if (e.key === "Enter") handleAdd(); 
    }

    const handleAdd = () => {
      const texto = inputText.trim();
      if (texto === "") return; 
      const newTask = { id: Date.now(), text: texto}; 
      setToDos(prev => [...prev, newTask]);
      setInputText (""); 
    }

    const handleDelete = (id) => {
      setToDos(prev => prev.filter(t => t.id !== id)); 
    }

  return (
    <div className="container text-secondary">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow-sm mt-4 mx-auto" style={{ maxWidth: "600px", width: "100%" }}>
              <ul className="list-group list-group-flush">

                <li className="list-group-item p-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-0 rounded-0"
                      placeholder="What do we have to accomplish today?"
                      value={inputText}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleAdd}
                    >
                      Add Task
                    </button>
                  </div>
                </li>

                {toDos.map((todo) => (
                  <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {todo.text}
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-secondary"
                      onClick={() => handleDelete(todo.id)}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>

              <div className="card-footer text-muted small">
                {toDos.length === 0
                  ? "No tasks left"
                  : `${toDos.length} item${toDos.length > 1 ? "s" : ""} left`}
              </div>
            </div>
          </div>
        </div>
      </div>
        
  )
}

export default ToDoList; 

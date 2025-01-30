import React, { useState } from "react";
import TaskList from "./components/TaskList";

const ToDoListApp = () => {
  // Estado para guardar la lista de tareas
  const [task, settask] = useState("");
  // Guarda el texto solo cuando presiona Enter
  const [submittedText, setSubmittedText] = useState([]);

  // Función que maneja los cambios en el input
  const handleInputChange = (event) => {
    // Actualiza el estado con lo que el usuario escribe
    settask(event.target.value);
  };

  // Función que detecta si el usuario presionó Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && task.trim() !== "") {
      setSubmittedText([...submittedText, task]); // Guarda el texto en el estado final
      settask(""); // Limpia el input
    }
  };
  const ButtonAddTask = () => {
    if (task.trim() === "") {
      alert("⚠️ Escribe una tarea antes de agregar.");
      return;
    }
    setSubmittedText([...submittedText, task]); // Guarda el texto en el estado final
    settask(""); // Limpia el input
  };

  const ButtonDeleteTask = () => {
    if (submittedText.length === 0) {
      alert("⚠️ Escribe una tarea antes de eliminar.");
    } else {
      const newTasks = submittedText.slice(0, -1); // Eliminar el último elemento del array
      setSubmittedText(newTasks); // Actualizar el estado
    }
  };

  // Función para eliminar una tarea completada
  const removeCompletedTask = (index) => {
    const updatedTasks = submittedText.filter((_, i) => i !== index); // Filtrar la tarea eliminada
    setSubmittedText(updatedTasks); // Actualizar el estado
  };

  return (
    <div className="todo-container">
      <h1>To do list App</h1>

      <input
        type="text"
        placeholder="New task"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {/* Aquí va la lista de tareas */}
      <TaskList task={submittedText}  removeCompletedTask={removeCompletedTask}/>
      <div className="containerButton">
        <button onClick={ButtonAddTask}>Agregar Tarea</button>
        <button className="delete-button" onClick={ButtonDeleteTask}>
          Eliminar tarea
        </button>
      </div>
    </div>
  );
};

export default ToDoListApp;
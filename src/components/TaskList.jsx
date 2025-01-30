import React, { useEffect, useState } from "react";

const TaskList = ({ task }) => {
  const [listtask, setlisttask] = useState([]);
  // Actualiza el estado solo cuando 'task' cambie
  useEffect(() => {
    if (Array.isArray(task)) {
      setlisttask(task);
    } else {
      setlisttask([]); // Previene errores si task no es un array
    }
  }, [task]);

  const ButtonCompleteTask = (index) => {
    // Creamos una copia del array
    const updatedTasks = [...listtask];
    // Eliminamos la tarea con el índice especificado
    updatedTasks.splice(index, 1);
    // Actualizamos el estado con el array filtrado
    setlisttask(updatedTasks);
    alert(`Task ${index} completed`);
    console.log(listtask);
  };

  return (
    <div className="card">
      <h3>List task</h3>
      <ol>
        {listtask?.map((t, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <li>{t}</li>
            <button
              className="complete-button"
              onClick={() => ButtonCompleteTask(index)}
            >
              Completed task
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
};
export default TaskList;

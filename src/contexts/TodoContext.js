import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { idGenerator } from "../utils/idGenerator";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!(searchValue.length >= 1)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.description.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const onAddTodo = (description) => {
    const newTodos = [...todos]
    newTodos.push({
      id: idGenerator(),
      completed: false,
      description
    })
    saveTodos(newTodos)
  }

  const onTodoChangeStatus = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const onDeleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider 
        value={{
            searchValue,
            setSearchValue, 
            totalTodos,
            completedTodos,
            searchedTodos,
            onTodoChangeStatus,
            onDeleteTodo,
            onAddTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}
    >
        {children}
    </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

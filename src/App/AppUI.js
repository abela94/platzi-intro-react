import React, { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { Loader } from "../components/Loader";
import { ErrorAlert } from "../components/ErrorAlert";
import { NoTodoPlaceholder } from "../components/NoTodoPlaceholder";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    onTodoChangeStatus,
    onDeleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorAlert />
      ) : (
        <div className="AppContainer">
          <TodoCounter />
          <TodoSearch />
          {!loading && !searchedTodos.length ? (
            <NoTodoPlaceholder />
          ) : (
            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  text={todo.description}
                  completed={todo.completed}
                  onTodoChangeStatus={() => onTodoChangeStatus(todo.id)}
                  onDeleteTodo={() => onDeleteTodo(todo.id)}
                />
              ))}
            </TodoList>
          )}
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          <TodoCreateButton openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      )}
    </>
  );
}

export { AppUI };

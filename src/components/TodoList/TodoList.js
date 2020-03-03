import React from "react";
import useModal from "react-hooks-use-modal";
import AddTodoModule from "../AddTodoModule/AddTodoModule";

import "./TodoList.scss";

function TodoList() {
  const [Modal, open] = useModal("root", {
    preventScroll: true
  });
  const openAddTodoModule = e => {
    e.preventDefault();
    open();
  };
  return (
    <div className="TodoList">
      <input placeholder="Add Todo" onClick={openAddTodoModule} readOnly />
      <ul>
        <li>Make Bread</li>
        <li>Bake Bread</li>
        <li>Make Bread</li>
      </ul>
      <Modal>
        <AddTodoModule />
      </Modal>
    </div>
  );
}

export default TodoList;

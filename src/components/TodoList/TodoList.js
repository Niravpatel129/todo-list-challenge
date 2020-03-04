import React from "react";
import useModal from "react-hooks-use-modal";
import AddTodoModule from "../AddTodoModule/AddTodoModule";
import TextField from "@material-ui/core/TextField";

import "./TodoList.scss";
import TodosItem from "../TodosItem/TodosItem";

function TodoList() {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true
  });

  const openAddTodoModule = e => {
    e.preventDefault();
    open();
  };

  return (
    <div className="TodoList">
      <TextField
        id="standard-basic"
        label="Add New Todo"
        onClick={openAddTodoModule}
      />
      <br />
      <TodosItem />
      <Modal>
        <AddTodoModule closeModal={close} />
      </Modal>
    </div>
  );
}

export default TodoList;

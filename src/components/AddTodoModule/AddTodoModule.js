import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import "./AddTodoModule.scss";

const useStyles = makeStyles(theme => ({
  theme: {
    display: "block"
  },
  select: {
    width: "100%"
  }
}));

const values = [
  {
    value: "done",
    label: "done"
  },
  {
    value: "pending",
    label: "pending"
  }
];

function AddTodoModule({ closeModal }) {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    status: "",
    date: "2020-02-24"
  });

  const handleFormChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    console.log(formValues);
    closeModal();
  };

  return (
    <div className="AddTodoModule">
      <form noValidate autoComplete="off">
        <TextField
          label="Title"
          onChange={handleFormChange}
          value={formValues.title}
          name="title"
        />
        <br />
        <TextField
          label="Description"
          onChange={handleFormChange}
          value={formValues.description}
          name="description"
        />
        <br />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          onChange={handleFormChange}
          value={formValues.status}
          name="status"
          className={classes.select}
        >
          {values.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          id="date"
          label="Date Due"
          type="date"
          className={classes.theme}
          onChange={handleFormChange}
          value={formValues.date}
          name="date"
        />
        <br />
        <label htmlFor="outlined-button-file">
          <Button
            variant="outlined"
            component="span"
            onClick={handleFormSubmit}
          >
            Add Todo
          </Button>
        </label>
      </form>
    </div>
  );
}

export default AddTodoModule;

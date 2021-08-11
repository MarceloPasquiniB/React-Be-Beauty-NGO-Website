import React, { useState, useContext } from "react";
import { ViewPortContext } from "../../../Context/ViewPortContext";
import { FormCardText } from "../../Styled/Card";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

export default function MiniForm() {
  const { name, setName, email, setEmail, updates, setUpdates, sent, setSent } =
    useContext(ViewPortContext);

  function HandleSubmit() {
    console.log({ Name: `${name}`, Email: `${email}`, Updates: `${updates}` });
    setSent(true);
  }
  return (
    <>
      <FormCardText> Subscribe </FormCardText>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextField
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="name"
          label="name"
          name="name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="email"
          name="email"
          label="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControlLabel
          label="Updates"
          control={
            <Switch
              checked={updates}
              onChange={(event) => {
                setUpdates(event.target.checked);
              }}
              name="updates"
              color="secondary"
            />
          }
        />
        <Button
          onClick={(e) => HandleSubmit(e)}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

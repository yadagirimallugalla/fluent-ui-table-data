import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { DatePicker, Stack } from "@fluentui/react";

export default function AddUserForm({ onClose }) {
  const handleCancel = () => {
    onClose();
  };

  return (
    <Stack>
      <Grid container spacing={3}>
        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="First Name" variant="outlined" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Last Name" variant="outlined" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Email ID" variant="outlined" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Age" variant="outlined" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Date of Birth" />
        </Grid>

        <Grid item>
          <TextField label="Gender" variant="outlined" />
        </Grid>
      </Grid>
      <Stack
        tokens={{ childrenGap: 10 }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: " 1em 0",
        }}
      >
        <Button variant="contained" color="error" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="success">
          Save
        </Button>
      </Stack>
    </Stack>
  );
}

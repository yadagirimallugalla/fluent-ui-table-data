import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import {
  DatePicker,
  Stack,
  TextField,
  MaskedTextField,
  Dropdown,
} from "@fluentui/react";

const genderOptions = [
  { key: "male", text: "Male" },
  { key: "female", text: "Female" },
  { key: "others", text: "Others" },
];
const bloodGroupOptions = [
  { key: "oPositive", text: "O+" },
  { key: "oNegative", text: "O-" },
  { key: "aPositive", text: "A+" },
  { key: "aNegative", text: "A-" },
  { key: "bPositive", text: "B+" },
  { key: "bNegative", text: "B-" },
  { key: "abPositive", text: "AB+" },
  { key: "abNegative", text: "AB-" },
];

export default function AddUserForm({ onClose }) {
  const handleCancel = () => {
    onClose();
  };

  return (
    <Stack>
      <Grid container spacing={3}>
        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="First Name" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Last Name" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Email ID" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Age" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField label="Phone Number" />
        </Grid>
        <Grid item sx={12} sm={6} lb={3}>
          <DatePicker label="Date of Birth" />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <Dropdown label="Gender" options={genderOptions} />
        </Grid>
        <Grid item sx={12} sm={6} lb={3}>
          <Dropdown label="Blood Group" options={bloodGroupOptions} />
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

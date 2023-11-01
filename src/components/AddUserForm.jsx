import React, { useEffect, useState } from "react";
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
  { key: "O+", text: "O+" },
  { key: "O-", text: "O-" },
  { key: "A+", text: "A+" },
  { key: "A-", text: "A-" },
  { key: "B+", text: "B+" },
  { key: "B-", text: "B-" },
  { key: "AB+", text: "AB+" },
  { key: "AB-", text: "AB-" },
];

export default function AddUserForm({ onClose, editMode, cellData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    birthDate: "",
    gender: null,
    bloodGroup: null,
  });
  console.log("editMode", editMode);
  console.log("cellData", cellData); // here cell id will be there

  const loadUserData = (id) => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          age: data.age || "",
          phone: data.phone || "",
          birthDate: data.birthDate || "",
          gender: data.gender || null,
          bloodGroup: data.bloodGroup || null,
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  };

  useEffect(() => {
    if (editMode && cellData) {
      loadUserData(cellData);
    }
  }, [editMode, cellData]);

  const handleSubmit = () => {
    const postBody = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      birthDate: formData.birthDate,
      bloodGroup: formData.bloodGroup,
    };

    const API_URL = editMode
      ? `https://dummyjson.com/users/${cellData}`
      : "https://dummyjson.com/users/add";

    try {
      fetch(API_URL, {
        method: editMode ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postBody),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          onClose();
        });
    } catch (error) {
      console.error("Error creating/updating the user: ", error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Stack styles={{ childrenGap: 4 }}>
      <Grid container spacing={3}>
        <Grid item sx={12} sm={6} lb={3}>
          <TextField
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField
            label="Email ID"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField
            label="Age"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
          />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <TextField
            label="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </Grid>
        <Grid item sx={12} sm={6} lb={3}>
          <TextField
            label="Date of Birth"
            value={formData.birthDate}
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
          />
        </Grid>

        <Grid item sx={12} sm={6} lb={3}>
          <Dropdown
            label="Gender"
            options={genderOptions}
            value={formData.gender}
            selectedKey={formData.gender}
            onChange={(e, option) => handleInputChange("gender", option.key)}
          />
        </Grid>
        <Grid item sx={12} sm={6} lb={3}>
          <Dropdown
            label="Blood Group"
            value={formData.bloodGroup}
            options={bloodGroupOptions}
            selectedKey={formData.bloodGroup}
            onChange={(e, option) =>
              handleInputChange("bloodGroup", option.key)
            }
          />
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
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
}

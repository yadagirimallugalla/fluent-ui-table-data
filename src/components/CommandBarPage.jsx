import React, { useState } from "react";
import { CommandBar, Dialog, DialogType } from "@fluentui/react";
import AddUserForm from "./AddUserForm";
import { deleteUser } from "./APIsLogic";

export default function CommandBarPage({ selectedCellData }) {
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const showFormHandler = () => {
    console.log("showFormHandler triggered");

    setShowForm(true);
    setIsEditMode(false);
  };
  const closeFormHandler = () => {
    setShowForm(false);
    setIsEditMode(false);
  };

  const editFormHandler = () => {
    console.log("editFormHandler triggered");

    if (selectedCellData) {
      console.log("Selected User Data:", selectedCellData); // Log the selected data
      setShowForm(true);
      setIsEditMode(true);
    }
  };

  const deleteFormHandler = () => {
    if (selectedCellData) {
      const userId = selectedCellData.id;
      deleteUser(userId);
    }
  };
  const items = [
    {
      key: "newItem",
      text: "New",
      iconProps: { iconName: "Add" },
      onClick: showFormHandler,
    },
    {
      key: "updateItem",
      text: "Edit",
      iconProps: { iconName: "Edit" },
      onClick: editFormHandler,
    },
    {
      key: "deleteItem",
      text: "Delete",
      iconProps: { iconName: "Delete" },
      onClick: deleteFormHandler,
    },
  ];

  return (
    <div>
      <CommandBar items={items} />

      <Dialog
        maxWidth={600}
        hidden={!showForm}
        onDismiss={closeFormHandler}
        dialogContentProps={{
          type: DialogType.normal,
          title: isEditMode ? "Edit/Update User" : "Add User",
        }}
        modalProps={{
          isBlocking: false,
        }}
      >
        <AddUserForm
          onClose={closeFormHandler}
          editMode={isEditMode}
          cellData={selectedCellData}
        />
      </Dialog>
    </div>
  );
}

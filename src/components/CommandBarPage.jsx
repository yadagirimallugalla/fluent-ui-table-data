import React, { useState } from "react";
import { CommandBar, Dialog, DialogType } from "@fluentui/react";
import AddUserForm from "./AddUserForm";
import { deleteUser } from "./APIsLogic";

export default function CommandBarPage({ selectedCellData }) {
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
    setIsEditMode(false);
  };
  const closeFormHandler = () => {
    setShowForm(false);
    setIsEditMode(false);
  };

  const editFormHandler = () => {
    if (selectedCellData) {
      setShowForm(true);
      setIsEditMode(true);
    }
  };

  const deleteFormHandler = () => {
    if (selectedCellData) {
      const userId = selectedCellData;
      deleteUser(userId);
      alert("User deleted successfully");
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

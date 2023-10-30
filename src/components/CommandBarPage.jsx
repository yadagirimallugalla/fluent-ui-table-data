import React, { useState } from "react";
import { CommandBar, Dialog, DialogType } from "@fluentui/react";
import AddUserForm from "./AddUserForm";

export default function CommandBarPage() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };
  const closeFormHandler = () => {
    setShowForm(false);
  };

  const items = [
    {
      key: "newItem",
      text: "New",
      iconProps: { iconName: "Add" },
      onClick: showFormHandler,
    },
    { key: "updateItem", text: "Edit", iconProps: { iconName: "Edit" } },
    { key: "deleteItem", text: "Delete", iconProps: { iconName: "Delete" } },
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
          title: "Add User",
        }}
        modalProps={{
          isBlocking: false,
        }}
      >
        <AddUserForm onClose={closeFormHandler} />
      </Dialog>
    </div>
  );
}

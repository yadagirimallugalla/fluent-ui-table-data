import { tokens } from "@fluentui/react-components";
import AddUserForm from "./components/AddUserForm";
import CommandBarPage from "./components/CommandBarPage";
import TableData from "./components/TableDataPage";
import { initializeIcons } from "@fluentui/react";

function App() {
  initializeIcons();
  return (
    <div>
      {/* <AddUserForm /> */}
      <CommandBarPage />
      <TableData />
    </div>
  );
}

export default App;

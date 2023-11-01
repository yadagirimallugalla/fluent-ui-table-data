import React, { useEffect, useState } from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  createTableColumn,
  tokens,
  makeStyles,
} from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react";
import { TablePagination, Stack } from "@mui/material";
import CommandBarPage from "./CommandBarPage";
import { fetchEmployeesData } from "./APIsLogic";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  container: {
    flex: 1,
    overflowX: "auto",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground1Selected,
    border: "1px solid black",
  },
});

const defaultRecordPerPage = 10;

export default function TableData() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(defaultRecordPerPage);
  const [selectedCellData, setSelectedCellData] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await fetchEmployeesData();
        setEmployees(employeesData);
        console.log("Users Data:", employeesData);
      } catch (err) {
        console.error("Error Fetching Employees Data: ", err);
      }
    };
    fetchEmployees();
  }, []);

  const startIndex = currentPage * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const displyedEmployees = employees.slice(startIndex, endIndex);

  const columns = [
    createTableColumn({
      columnId: "id",
      compare: (a, b) => a.id - b.id,
      renderHeaderCell: () => "Employee ID",
      renderCell: (item) => <TableCellLayout>{item.id}</TableCellLayout>,
    }),
    createTableColumn({
      columnId: "firstName",
      compare: (a, b) => a.firstName.localeCompare(b.firstName),
      renderHeaderCell: () => "First Name",
      renderCell: (item) => <TableCellLayout>{item.firstName}</TableCellLayout>,
    }),
    createTableColumn({
      columnId: "lastName",
      compare: (a, b) => a.lastName.localeCompare(b.lastName),
      renderHeaderCell: () => "Last Name",
      renderCell: (item) => <TableCellLayout>{item.lastName}</TableCellLayout>,
    }),
    createTableColumn({
      columnId: "email",
      compare: (a, b) => a.email.localeCompare(b.email),
      renderHeaderCell: () => "Email ID",
      renderCell: (item) => (
        <TableCellLayout>{item.email.toLowerCase()}</TableCellLayout>
      ),
    }),
    createTableColumn({
      columnId: "age",
      compare: (a, b) => a.age - b.age,
      renderHeaderCell: () => "Age",
      renderCell: (item) => <TableCellLayout>{item.age}</TableCellLayout>,
    }),
    createTableColumn({
      columnId: "phone",
      compare: (a, b) => a.phone.localeCompare(b.phone),
      renderHeaderCell: () => "Phone Number",
      renderCell: (item) => <TableCellLayout>{item.phone}</TableCellLayout>,
    }),
    createTableColumn({
      columnId: "gender",
      compare: (a, b) => a.gender.localeCompare(b.gender),
      renderHeaderCell: () => "Gender",
      renderCell: (item) => (
        <TableCellLayout>
          {item.gender.charAt(0).toUpperCase() +
            item.gender.slice(1).toLowerCase()}
        </TableCellLayout>
      ),
    }),
    createTableColumn({
      columnId: "birthDate",
      compare: (a, b) => a.birthDate.localeCompare(b.birthDate),
      renderHeaderCell: () => "Date of Birth",
      renderCell: (item) => <TableCellLayout>{item.birthDate}</TableCellLayout>,
    }),
    createTableColumn({
      columnId: "bloodGroup",
      compare: (a, b) => a.bloodGroup.localeCompare(b.bloodGroup),
      renderHeaderCell: () => "Blood Group",
      renderCell: (item) => (
        <TableCellLayout>{item.bloodGroup}</TableCellLayout>
      ),
    }),
  ];
  const columnSizingOptions = {
    id: { defaultWidth: 100 },
    age: { defaultWidth: 100 },
    email: {
      defaultWidth: 250,
    },
  };

  const styles = useStyles();
  return (
    <div className={styles.root}>
      <CommandBarPage selectedCellData={selectedCellData} />

      <Stack className={styles.container}>
        <DataGrid
          as="table"
          items={displyedEmployees}
          columns={columns}
          sortable
          selectionMode="multiselect"
          getRowId={(item) => item.id}
          resizableColumns={true}
          onSelectionChange={(e, data) => {
            let value = Array.from(data.selectedItems);
            setSelectedCellData(value[0]);
          }}
          focusMode="composite"
          // onSelectionChange={(selectedItems) => {
          //   console.log("selectedItems", selectedItems.target);

          //   if (selectedItems.length === 1) {
          //     setSelectedCellData(selectedItems[0]);
          //   } else {
          //     setSelectedCellData(null);
          //   }
          // }}
          columnSizingOptions={columnSizingOptions}
        >
          <DataGridHeader
            style={{
              backgroundColor: tokens.colorNeutralBackground1Pressed,
            }}
          >
            <DataGridRow selectionCell={{ "aria-label": "Select all rows" }}>
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody>
            {({ item, rowId }) => (
              <DataGridRow
                key={rowId}
                selectionCell={{ "aria-label": "Select row" }}
              >
                {({ renderCell }) => (
                  <DataGridCell>{renderCell(item)}</DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
        <Stack className={styles.pagination}>
          <TablePagination
            component="div"
            count={employees.length}
            page={currentPage}
            onPageChange={(event, newPage) => setCurrentPage(newPage)}
            rowsPerPage={recordsPerPage}
            onRowsPerPageChange={(e) => {
              const newRowsPerPage = e.target.value;
              setRecordsPerPage(newRowsPerPage);
              setCurrentPage(0);
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
}

import { createSlice } from "@reduxjs/toolkit";
import { Form } from "../core/types/form";
import { Dayjs } from "dayjs";

const tableDataFromLocalStorage = localStorage.getItem("tableData");
let parsedTableData = [];
if (tableDataFromLocalStorage) {
  parsedTableData = JSON.parse(tableDataFromLocalStorage);
}

interface TableData {
  key: number;
  prefix: string;
  firstName: string;
  lastName: string;
  birthDate: Dayjs | null;
  nationality: string | any;
  idCard: string;
  gender: string;
  region: string;
  phoneNumber: string;
  passport: string;
  expectedSalary: string;
}

interface TableStorageState {
  form: Form[];
  table: TableData[];
}

const initialState: TableStorageState = {
  form: [],
  table: parsedTableData,
};

const tableSlice = createSlice({
  name: "tableStorage",
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.form.push(action.payload as Form);
    },
    addToTable: (state, action) => {
      state.table.push(action.payload as TableData);
      state.table = state.table.map((e, index) => ({ ...e, key: index }));
      localStorage.setItem("tableData", JSON.stringify(state.table));
    },
    clearTableData: (state) => {
      state.table = [];
      localStorage.removeItem("tableData");
    },
    deleteByIndex: (state, action) => {
      state.table.splice(action.payload, 1);
      state.table = state.table.map((e, index) => ({ ...e, key: index }));
      localStorage.setItem("tableData", JSON.stringify(state.table));
    },
  },
});

export const { addForm, addToTable, clearTableData, deleteByIndex } =
  tableSlice.actions;
export default tableSlice.reducer;

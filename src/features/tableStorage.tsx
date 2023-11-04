import { createSlice } from "@reduxjs/toolkit";
import { Form } from "../core/types/form";

interface TableData {
  key: string;
  name: string;
  gender: string;
  phonenumber: string;
  region: string;
  nationality: string;
}

interface TableStorageState {
  form: Form[];
  table: TableData[];
}

const initialState: TableStorageState = {
  form: [],
  table: [],
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
    },
    clearTableData: (state) => {
      state.table = [];
    },
  },
});

export const { addForm, addToTable, clearTableData } = tableSlice.actions;
export default tableSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Form } from "../core/types/form";

const initialState: Form = {
  prefix: "",
  firstName: "",
  lastName: "",
  birthDate: null,
  nationality: "",
  idCard: "",
  gender: "",
  region: "",
  phoneNumber: "",
  passport: "",
  expectedSalary: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    setPrefix: (state, action) => {
      return { ...state, prefix: action.payload };
    },
    resetForm: (state) => {
      return { ...initialState };
    },
  },
});

export const { setForm, setPrefix, resetForm } = formSlice.actions;
export default formSlice.reducer;

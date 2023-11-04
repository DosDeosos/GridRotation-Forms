import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setForm, resetForm } from "../features/formsStorage";
import { addForm, addToTable } from "../features/tableStorage";
import DateTable from "../components/ui/datepicker";
import Prefixer from "../components/ui/prefixselector";
import NationalityPicker from "../components/ui/nationalitypicker";
import RadioPicker from "../components/ui/radiogroup";
import TelephoneRegion from "../components/ui/telephoneregion";
import TableSorting from "../components/ui/table";
import { Form } from "../core/types/form";
import { useTranslation } from "react-i18next";

function FormsSheet() {
  const { t } = useTranslation();
  const form = useSelector((state: RootState) => state.form);
  const table = useSelector((state: RootState) => state.table);
  const dispatch = useDispatch();

  const handleFormChange = (field: string, value: string) => {
    const updatedForm = { ...form, [field]: value };
    dispatch(setForm(updatedForm));
  };

  const handleIDCardChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldNumber: number
  ) => {
    const value = e.target.value;
    const updatedForm = { ...form } as Form;

    updatedForm[`input${fieldNumber}` as keyof Form] = value;

    updatedForm.idCard = Object.keys(updatedForm)
      .filter((key) => key.startsWith("input"))
      .map((key) => updatedForm[key as keyof Form])
      .join("");

    dispatch(setForm(updatedForm));

    if (
      value.length >=
      (fieldNumber === 1
        ? 1
        : fieldNumber === 2
        ? 4
        : fieldNumber === 3
        ? 5
        : fieldNumber === 4
        ? 2
        : 1)
    ) {
      const nextInputId = `input${fieldNumber + 1}`;
      const nextInput = document.getElementById(
        nextInputId
      ) as HTMLInputElement | null;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const clearInputFields = () => {
    dispatch(resetForm());

    (document.getElementById("input1") as HTMLInputElement).value = "";
    (document.getElementById("input2") as HTMLInputElement).value = "";
    (document.getElementById("input3") as HTMLInputElement).value = "";
    (document.getElementById("input4") as HTMLInputElement).value = "";
    (document.getElementById("input5") as HTMLInputElement).value = "";
  };

  const addDataToTable = () => {
    const combinedPhoneNumber = `${form.region} - ${form.phoneNumber}`;
    const updatedForm = { ...form, phoneNumber: combinedPhoneNumber };
    dispatch(addForm(updatedForm));
    dispatch(addToTable(updatedForm));
    clearInputFields();
  };

  return (
    <div className="background h-full overflow-auto">
      {JSON.stringify(table)}
      <div>
        <div>
          <div className="ml-[4rem] text-[2rem]">{t("formManagement")}</div>
        </div>
        <div className="mt-6 mx-[28rem] border-2 border-black rounded-lg">
          <div className="m-4 flex-col">
            <div className="flex items-center pb-6">
              <div className="required text-[24px]">*</div>
              <div className="px-2">{t("prefix")}:</div>
              <Prefixer
                value={form.prefix}
                onChange={(e) => handleFormChange("prefix", e)}
              />
              <div className="required pl-2 text-[24px]">*</div>
              <div className="px-2">{t("firstName")}:</div>
              <input
                className="rounded-md px-2 w-[18rem] h-[2rem]"
                value={form.firstName}
                onChange={(e) => handleFormChange("firstName", e.target.value)}
              />
              <div className="required pl-2 text-[24px]">*</div>
              <div className="px-2">{t("surname")}:</div>
              <input
                className="rounded-md px-2 w-[18rem] h-[2rem]"
                value={form.lastName}
                onChange={(e) => handleFormChange("lastName", e.target.value)}
              />
            </div>
            <div className="flex items-center pb-6">
              <div className="required text-[24px]">*</div>
              <div className="px-2">{t("birthdate")}</div>
              <div className="px-2">
                <DateTable
                  value={form.birthDate}
                  onChange={(e) => handleFormChange("birthDate", e)}
                />
              </div>
              <div className="required text-[24px]">*</div>
              <div className="px-2">{t("nationality")}</div>
              <NationalityPicker
                value={form.nationality}
                onChange={(e) => handleFormChange("nationality", e)}
              />
            </div>
            <div className="pb-6 px-2 flex items-center">
              <div className="mr-4">{t("IDCard")}: </div>
              {[1, 2, 3, 4, 5].map((fieldNumber) => (
                <React.Fragment key={fieldNumber}>
                  {fieldNumber === 1 && (
                    <input
                      className="rounded-md px-2 w-[3rem] h-[2rem] text-center"
                      id={`input${fieldNumber}`}
                      maxLength={1}
                      onChange={(e) => handleIDCardChange(e, fieldNumber)}
                    />
                  )}
                  {fieldNumber > 1 && fieldNumber < 5 && (
                    <>
                      <div className="flex items-center w-[2rem] px-4"> - </div>
                      <input
                        className="rounded-md px-2 w-[6rem] h-[2rem] text-center"
                        id={`input${fieldNumber}`}
                        maxLength={
                          fieldNumber === 2
                            ? 4
                            : fieldNumber === 3
                            ? 5
                            : fieldNumber === 4
                            ? 2
                            : 1
                        }
                        onChange={(e) => handleIDCardChange(e, fieldNumber)}
                      />
                    </>
                  )}
                  {fieldNumber === 5 && (
                    <>
                      <div className="flex items-center w-[2rem] px-4"> - </div>
                      <input
                        className="rounded-md px-2 w-[3rem] h-[2rem] text-center"
                        id={`input${fieldNumber}`}
                        maxLength={1}
                        onChange={(e) => handleIDCardChange(e, fieldNumber)}
                      />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center pb-6">
              <div className="required text-[24px]">*</div>
              <div className="px-2">{t("gender")}:</div>
              <RadioPicker
                value={form.gender}
                onChange={(value) => handleFormChange("gender", value)}
              />
            </div>
            <div className="flex pb-6">
              <div className="required text-[24px]">*</div>
              <div className="flex items-center px-2">{t("phoneNumber")}:</div>
              <TelephoneRegion
                value={form.region}
                onChange={(value) => handleFormChange("region", value)}
              />
              <div className="flex items-center w-[2rem] px-4"> - </div>
              <input
                className="rounded-md mx-4 w-[18rem] h-[2rem] pl-4"
                value={form.phoneNumber}
                onChange={(e) =>
                  handleFormChange("phoneNumber", e.target.value)
                }
              />
            </div>
            <div className="flex item-center pb-6 px-2">
              <div className="flex items-center">{t("passport")}:</div>
              <input
                className="rounded-md mx-4 w-[18rem] h-[2rem] pl-4"
                value={form.passport}
                onChange={(e) => handleFormChange("passport", e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="required text-[24px]">*</div>
                <div className="px-2">{t("expectSalary")}:</div>
                <input
                  className="rounded-md mx-4 w-[18rem] h-[2rem] pl-4"
                  value={form.expectedSalary}
                  onChange={(e) =>
                    handleFormChange("expectedSalary", e.target.value)
                  }
                />
              </div>
              <div className="flex mr-4">
                <button
                  className="mr-6 border rounded-md p-2 bg-white"
                  onClick={clearInputFields}
                >
                  {t("clear")}
                </button>
                <button
                  className="mr-6 border rounded-md p-2 bg-white"
                  onClick={addDataToTable}
                >
                  {t("confirm")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex ml-[6rem] mt-[2rem]"></div>
        <div>
          <div className="mx-[6rem] mt-2">
            <TableSorting />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormsSheet;

import React, { useState } from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";

const DateTable: React.FC<{
  value: Dayjs | null;
  onChange: (date: any, dateString: string) => void;
}> = ({ onChange, value }) => {
  const [placement, SetPlacement] =
    useState<DatePickerProps["placement"]>("topLeft");

  const { t } = useTranslation();

  return (
    <>
      <DatePicker
        value={value}
        onChange={onChange}
        placement={placement}
        placeholder={t("date")}
      />
    </>
  );
};

export default DateTable;

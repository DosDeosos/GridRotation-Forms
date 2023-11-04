import React, { useState } from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { Dayjs } from "dayjs";

const DateTable: React.FC<{
  value: Dayjs | null;
  onChange: (date: any, dateString: string) => void;
}> = ({ onChange, value }) => {
  const [placement, SetPlacement] =
    useState<DatePickerProps["placement"]>("topLeft");

  return (
    <>
      <DatePicker
        value={value}
        onChange={onChange}
        placement={placement}
        placeholder="เดือน/วัน/ปี"
      />
    </>
  );
};

export default DateTable;

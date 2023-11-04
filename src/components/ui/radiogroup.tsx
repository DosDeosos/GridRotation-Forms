import React from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface RadioPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const RadioPicker: React.FC<RadioPickerProps> = ({ value, onChange }) => {
  const handleChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value="ผู้ชาย">ผู้ชาย</Radio>
      <Radio value="ผู้หญิง">ผู้หญิง</Radio>
      <Radio value="ไม่ระบุ">ไม่ระบุ</Radio>
    </Radio.Group>
  );
};

export default RadioPicker;

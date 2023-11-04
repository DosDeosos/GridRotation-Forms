import React from "react";
import { Select, Space } from "antd";

interface NationalityPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const NationalityPicker: React.FC<NationalityPickerProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="- - กรุณาเลือก - -"
        value={value}
        style={{ width: 200 }}
        onChange={handleChange}
        options={[
          { value: "พุทธ", label: "พุทธ" },
          { value: "คริส", label: "คริส" },
          { value: "อิสลาม", label: "อิสลาม" },
        ]}
      />
    </Space>
  );
};

export default NationalityPicker;

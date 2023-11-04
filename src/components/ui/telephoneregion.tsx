import React from "react";
import { Select, Space } from "antd";

interface TelephoneRegionProps {
  value: string;
  onChange: (value: string) => void;
}

const TelephoneRegion: React.FC<TelephoneRegionProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <Space wrap>
      <Select
        value={value}
        className="text-center"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[{ value: "+66", label: "+66" }]}
      />
    </Space>
  );
};

export default TelephoneRegion;

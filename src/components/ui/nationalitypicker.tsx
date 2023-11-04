import React from "react";
import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <Space wrap>
      <Select
        defaultValue="- - กรุณาเลือก - -"
        value={value}
        style={{ width: 200 }}
        onChange={handleChange}
        options={[
          { value: t("thai"), label: t("thai") },
          { value: t("foreigner"), label: t("foreigner") },
        ]}
      />
    </Space>
  );
};

export default NationalityPicker;

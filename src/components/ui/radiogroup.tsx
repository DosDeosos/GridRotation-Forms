import React from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useTranslation } from "react-i18next";

interface RadioPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const RadioPicker: React.FC<RadioPickerProps> = ({ value, onChange }) => {
  const handleChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const { t } = useTranslation();

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={t("male")}>{t("male")}</Radio>
      <Radio value={t("female")}>{t("female")}</Radio>
      <Radio value={t("notSpecified")}>{t("notSpecified")}</Radio>
    </Radio.Group>
  );
};

export default RadioPicker;

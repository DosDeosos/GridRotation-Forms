import React from "react";
import { Select } from "antd";

const Selector: React.FC<{
  selectedLanguage: string;
  onLanguageChange: (e: string) => void;
}> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <>
      <Select
        defaultValue={selectedLanguage}
        onChange={onLanguageChange}
        className="text-center"
        style={{ width: 120 }}
        placement="bottomLeft"
        options={[
          {
            value: "th",
            label: "TH",
          },
          {
            value: "en",
            label: "EN",
          },
        ]}
      />
    </>
  );
};

export default Selector;

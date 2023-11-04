import React from "react";
import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";

const Prefixer: React.FC<{ value: string; onChange: (e: string) => void }> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <Space wrap>
      <Select
        value={value}
        placeholder="คำนำหน้าชื่อ"
        className="truncate !w-[5.5rem] h-[2rem]"
        style={{ width: 120 }}
        onChange={onChange}
        options={[
          { value: t("mr"), label: t("mr") },
          { value: t("mrs"), label: t("mrs") },
          { value: t("ms"), label: t("ms") },
        ]}
      />
    </Space>
  );
};

export default Prefixer;

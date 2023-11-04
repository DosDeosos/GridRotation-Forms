import React from "react";
import { Select, Space } from "antd";

const Prefixer: React.FC<{ value: string; onChange: (e: string) => void }> = ({
  value,
  onChange,
}) => (
  <Space wrap>
    <Select
      value={value}
      defaultValue="คำนำหน้าชื่อ"
      className="truncate !w-[5.5rem] h-[2rem]"
      style={{ width: 120 }}
      onChange={onChange}
      options={[
        { value: "นาย", label: "นาย" },
        { value: "นาง", label: "นาง" },
        { value: "นางสาว", label: "นางสาว" },
      ]}
    />
  </Space>
);

export default Prefixer;

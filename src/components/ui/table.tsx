import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  gender: string;
  phonenumber: string;
  nationality: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Phone Number",
    dataIndex: "phonenumber",
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
  },
  {
    title: "Manage",
    dataIndex: "manage",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    gender: "ผู้ชาย",
    phonenumber: "0818570121",
    nationality: "thai",
  },
];

const TableSorting: React.FC = () => {
  const [tableData, setTableData] = useState<DataType[]>(data);

  const handleSelectAll = (e: any) => {
    const allRowKeys = tableData.map((item) => item.key);
    setSelectedRowKeys(e.target.checked ? allRowKeys : []);
    setSelectAll(e.target.checked);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectAll(selectedRowKeys.length === tableData.length);
    },
  };

  return (
    <div>
      <div className="flex items-center ml-[6rem] mt-[2rem]">
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
        <div className="ml-2 flex items-center">เลือกทั้งหมด</div>
        <button className="rounded-lg p-[6px] ml-2 border-2 bg-white">
          ลบข้อมูล
        </button>
      </div>
      <div className="mx-[6rem] my-4 ">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
        />
      </div>
    </div>
  );
};

export default TableSorting;

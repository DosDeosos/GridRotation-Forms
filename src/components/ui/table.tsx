import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { clearTableData, deleteByIndex } from "../../features/tableStorage";

interface DataType {
  key: number;
  name: string;
  gender: string;
  phonenumber: string;
  nationality: string;
}

const TableSorting: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const table = useSelector((state: RootState) => state.table);
  const [tableData, setTableData] = useState<DataType[]>(table.table);
  // console.log(object);

  const columns: ColumnsType<DataType> = [
    {
      title: t("name"),
      dataIndex: "firstName",
    },
    {
      title: t("gender"),
      dataIndex: "gender",
    },
    {
      title: t("phoneNumber"),
      dataIndex: "phoneNumber",
    },
    {
      title: t("nationality"),
      dataIndex: "nationality",
    },
    {
      title: t("manage"),
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <a
          onClick={() => {
            dispatch(deleteByIndex(record.key));
          }}
        >
          Delete
        </a>
      ),
    },
  ];

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
      // console.log(selectedRowKeys);
      setSelectAll(selectedRowKeys.length === tableData.length);
    },
  };

  return (
    <div>
      <div className="flex items-center ml-[6rem] mt-[2rem]">
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
        <div className="ml-2 flex items-center">{t("selectAll")}</div>
        <button
          className="rounded-lg p-[6px] ml-2 border-2 bg-white"
          onClick={() => {
            dispatch(clearTableData());
          }}
        >
          {t("deleteAll")}
        </button>
      </div>
      <div className="mx-[6rem] my-4 ">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={table.table}
        />
      </div>
    </div>
  );
};

export default TableSorting;

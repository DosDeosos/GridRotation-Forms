import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";
import type { TableProps } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { clearTableData, deleteByIndex } from "../../features/tableStorage";
import { Dayjs } from "dayjs";

interface DataType {
  key: number;
  prefix: string;
  firstName: string;
  lastName: string;
  birthDate: Dayjs | null;
  nationality: string | any;
  idCard: string;
  gender: string;
  region: string;
  phoneNumber: string;
  passport: string;
  expectedSalary: string;
}

const TableSorting: React.FC = () => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const table = useSelector((state: RootState) => state.table);
  const [tableData, setTableData] = useState<DataType[]>(table.table);
  // console.log(object);

  const handleChange: TableProps<DataType>["onChange"] = (
    _,
    _2,
    sorter: any
  ) => {
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: t("name"),
      key: "name",
      dataIndex: "firstName",
      sorter: (a, b) => {
        return a.firstName < b.firstName ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
    },
    {
      title: t("gender"),
      key: "gender",
      dataIndex: "gender",
      sorter: (a, b) => {
        return a.gender < b.gender ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "gender" ? sortedInfo.order : null,
    },
    {
      title: t("phoneNumber"),
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      sorter: (a, b) => {
        return a.phoneNumber < b.phoneNumber ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "phoneNumber" ? sortedInfo.order : null,
    },
    {
      title: t("nationality"),
      key: "nationality",
      dataIndex: "nationality",
      sorter: (a, b) => {
        return a.nationality < b.nationality ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "nationality" ? sortedInfo.order : null,
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
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TableSorting;

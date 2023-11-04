import React, { useState } from "react";
import "../../assets/css/gridbutton.css";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const GridButton: React.FC = () => {
  const { t } = useTranslation();
  const [shape, setShape] = useState([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);
  const [checkPosition, setCheckPosition] = useState(true);

  const rotationleft = () => {
    // const array = [...shape];
    // array.push(array.splice(0, 1)[0]);
    // setShape(array);
    setShape((array) => {
      array.push(array.splice(0, 1)[0]);
      return [...array];
    });
    // ใช้วิธีการ Spread เพื่อให้ React สร้าง Array ใหม่ขึ้นมา เพราะถ้าใส่แค่ Array / React จะมองว่ามันคือค่าเดิม
  };

  const rotationright = () => {
    setShape((array) => {
      const lastIndex = array.pop();
      if (lastIndex) array.unshift(lastIndex);
      return [...array];
    });
  };

  const shuffleArrays = () => {
    setShape((array) => {
      array.sort(() => Math.random() - 0.5);
      return [...array];
    });
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-3 place-items-center">
          <div className="relative">
            <Button
              type="primary"
              shape="default"
              icon={<CaretLeftOutlined className="!text-[20rem]" />}
              onClick={rotationleft}
              className="bg-white text-gray-600 !w-fit h-fit hover:!bg-[#ffa200]"
            />
            <div className="absolute -bottom-[10px] left-[35%] bg-[#98da9e] rounded-xl p-[4px]">
              {t("moveShape")}
            </div>
          </div>
          <div className="relative">
            <Button
              type="primary"
              shape="default"
              className="bg-white text-gray-600 flex items-center !w-fit h-fit hover:!bg-[#ffa200]"
              onClick={() => {
                setCheckPosition(!checkPosition);
              }}
            >
              {<CaretUpOutlined className="!text-[20rem]" />}
              {<CaretDownOutlined className="!text-[20rem]" />}
            </Button>
            <div className="absolute -bottom-[10px] left-[43%] bg-[#98da9e] rounded-xl p-[4px]">
              {t("movePosition")}
            </div>
          </div>
          <div className="relative">
            <Button
              type="primary"
              shape="default"
              icon={<CaretRightOutlined className="!text-[20rem]" />}
              onClick={rotationright}
              className="bg-white text-gray-600 !w-fit h-fit hover:!bg-[#ffa200]"
            />
            <div className="absolute -bottom-[10px] left-[35%] bg-[#98da9e] rounded-xl p-[4px]">
              {t("moveShape")}
            </div>
          </div>
        </div>
      </div>
      <div className="border-gray-400 border-t-2 mt-6 mx-[10rem]" />
      <div>
        <div
          className={
            "flex " + (!checkPosition ? "justify-center" : "justify-end")
          }
        >
          {shape.slice(0, 3).map((rotate, index) => {
            return (
              <div
                key={index}
                className="bg-white w-[16rem] h-[12rem] flex items-center justify-center m-6 rounded-lg cursor-pointer hover:bg-[#ffa200]"
                onClick={shuffleArrays}
              >
                <div className={rotate} />
              </div>
            );
          })}
        </div>
        <div
          className={
            "flex " + (checkPosition ? "justify-center" : "justify-end")
          }
        >
          {shape.slice(3, 6).map((rotate, index) => {
            return (
              <div
                key={index}
                className="bg-white w-[16rem] h-[12rem] flex items-center justify-center m-6 rounded-lg cursor-pointer hover:bg-[#ffa200]"
                onClick={shuffleArrays}
              >
                <div className={rotate} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridButton;

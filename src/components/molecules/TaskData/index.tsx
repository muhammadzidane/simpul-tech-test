"use client";

import React, { useState } from "react";

import classNames from "classnames";
import Image from "next/image";

import { DatePicker, CheckBox } from "@/components";
import useToggle from "@/hooks/toggle";

const TaskData: React.FC<TaskDataProps> = ({
  checked = false,
  description,
  deadline,
  title,
  date,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const { isToggle, onToggle } = useToggle(false);

  const titleClassName = classNames("font-semibold", {
    "line-through text-gray-2": checked,
  });

  const onChangeCheckBox = (checkValue: boolean): void => {
    setIsChecked(checkValue);
  };

  return (
    <div className="flex items-center gap-5 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-2 pb-[22px]">
      <div className="mb-auto">
        <CheckBox onChange={onChangeCheckBox} checked={isChecked} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className={titleClassName}>{title}</div>

          <div className="flex">
            <div className="text-sm mr-[19px] text-danger">{deadline}</div>
            <div className="text-sm mr-2">{date}</div>

            <Image
              onClick={onToggle}
              src={`/svg/icon-arrow-${isToggle ? "down" : "up"}.svg`}
              className="mr-[10px] cursor-pointer"
              alt="Arrow Up"
              height={20}
              width={20}
            />

            <Image
              src="/svg/icon-horiz.svg"
              className="mr-[10px]"
              alt="Arrow"
              height={20}
              width={20}
            />
          </div>
        </div>
        {isToggle && (
          <div className="mt-4 animate-slide-in-bottom">
            <div className="flex gap-4 mb-2">
              <Image
                src="/svg/icon-watch.svg"
                className="mb-autoo"
                alt="Icon Watch"
                height={20}
                width={20}
              />

              <div>
                <DatePicker onChange={() => {}} selectedDate={new Date()} />
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src="/svg/icon-pencil.svg"
                className="mb-auto"
                alt="Icon Pencil"
                height={20}
                width={20}
              />

              <div className="pr-10">{description ?? "No Description"}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskData;

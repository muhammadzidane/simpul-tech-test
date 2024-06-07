"use client";

import React, { useState } from "react";

import classNames from "classnames";
import dayjs from "dayjs";
import Image from "next/image";

import { DatePicker, CheckBox, TextArea } from "@/components";
import useToggle from "@/hooks/toggle";

const TaskData: React.FC<TaskDataProps> = ({
  checked = false,
  description,
  deadline,
  title,
  date,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const { isToggle: isToggleContent, onToggle: onToggleContent } =
    useToggle(false);
  const { isToggle: isToggleDesc, onToggle: onToggleDesc } = useToggle(false);

  const taskNameClassName = classNames(
    "flex items-center gap-[18px] pb-[22px]",
    "[&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-2"
  );

  const titleClassName = classNames("font-semibold text-sm", {
    "line-through text-gray-2": isChecked,
  });

  const onToggleArrow = () => {
    if (isToggleDesc) {
      onToggleDesc();
    }
    onToggleContent();
  };

  const onChangeCheckBox = (checkValue: boolean): void => {
    setIsChecked(checkValue);
  };

  return (
    <div className={taskNameClassName}>
      <div className="mb-auto">
        <CheckBox onChange={onChangeCheckBox} checked={isChecked} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className={titleClassName}>{title}</div>

          <div className="flex">
            <div className="mr-[19px] text-danger text-sm">{deadline}</div>
            <div className="mr-2 text-sm">
              {dayjs(date).format("DD/MM/YYYY")}
            </div>

            <Image
              onClick={onToggleArrow}
              src={`/svg/icon-arrow-${isToggleContent ? "down" : "up"}.svg`}
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
        {isToggleContent && (
          <div className="mt-4 animate-slide-in-bottom">
            <div className="flex gap-4 mb-2">
              <Image
                src="/svg/icon-watch.svg"
                className="mb-auto"
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
                onClick={onToggleDesc}
                className="mb-auto cursor-pointer"
                src="/svg/icon-pencil.svg"
                alt="Icon Pencil"
                height={20}
                width={20}
              />

              {isToggleDesc ? (
                <TextArea value={description} className="h-auto" rows={12} />
              ) : (
                <div className="pr-10 text-sm">
                  {description ?? "No Description"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskData;

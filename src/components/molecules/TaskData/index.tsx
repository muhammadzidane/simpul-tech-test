import React from "react";

import Image from "next/image";

import { DatePicker, CheckBox } from "@/components";

const TaskData = () => {
  return (
    <div className="flex items-center gap-5 border-b border-gray-2 pb-[22px]">
      <div className="mb-auto">
        <CheckBox onChange={() => {}} checked={false} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className="font-semibold">
            Close off case #012920-RODRIGUES, Amiguel
          </div>

          <div className="flex">
            <div className="text-sm mr-[19px] text-danger">2 Days left</div>

            <Image
              src="/svg/icon-arrow-up.svg"
              className="mr-[10px]"
              alt="Arrow"
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
        <div className="mt-4">
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

            <div className="pr-10">
              Closing off this case since this application has been cancelled.
              No one really understand how this case could possibly be
              cancelled. The options and the documents within this document were
              totally a guaranteed for a success!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskData;

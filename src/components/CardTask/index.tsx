import React from "react";

import { Select, Button, Card } from "@/components";
import { dashboardFetchTaskList } from "@/request/dashboard";

import TaskData from "./TaskData";

const CardTask = async () => {
  const taskList = await dashboardFetchTaskList({ limit: "10", page: "1" });

  const myTaskOptions = [
    { label: "Personal Errands", value: "personalErrands" },
    { label: "Urgent To-Do", value: "urgentTodo" },
  ];

  return (
    <Card className="flex flex-col animate-slide-in-top w-[708px] h-[480px]">
      <div className="flex justify-between pl-20 mb-[20px]">
        <Select
          selectClassName="w-fit"
          options={myTaskOptions}
          placeholder="My Tasks"
        />
        <Button>New Task</Button>
      </div>

      <div className="flex flex-col gap-[20px] overflow-y-scroll pr-2">
        {taskList?.data.map(
          ({ publishDate, owner, likes, text }, taskDataIndex) => (
            <TaskData
              title={owner.firstName + " " + owner.lastName}
              deadline="2 Days Left"
              checked={likes <= 5}
              key={taskDataIndex}
              description={text}
              date={publishDate}
            />
          )
        )}
      </div>
    </Card>
  );
};

export default CardTask;

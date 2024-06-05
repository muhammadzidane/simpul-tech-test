import React from "react";

import { TaskData, Select, Button, Card } from "@/components";

const CardTask = () => {
  const myTaskOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <Card
      className="flex flex-col animate-slide-in-top"
      height="480px"
      width="708px"
    >
      <div className="flex justify-between pl-20 mb-[20px]">
        <Select
          onChange={() => {}}
          selectClassName="w-fit"
          options={myTaskOptions}
          placeholder="My Tasks"
        />
        <Button>New Task</Button>
      </div>

      <div className="flex flex-col gap-[20px]">
        <TaskData />
        <TaskData />
      </div>
    </Card>
  );
};

export default CardTask;

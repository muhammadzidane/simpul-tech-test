import React from "react";

import { TaskData, Select, Button, Card } from "@/components";

const CardTask = () => {
  const myTaskOptions = [
    { label: "Personal Errands", value: "personalErrands" },
    { label: "Urgent To-Do", value: "urgentTodo" },
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

      <div className="flex flex-col gap-[20px] overflow-y-scroll pr-2">
        <TaskData
          description="Closing off this case since this application has been cancelled.
          No one really understand how this case could possibly be
          cancelled. The options and the documents within this document were
          totally a guaranteed for a success!"
          title="Close off case #012920-RODRIGUES, Amiguel"
          deadline="2 Days Left"
          date="12/06/2021"
          checked
        />
        <TaskData
          title="Close off case #012920-RODRIGUES, Amiguel"
          deadline="2 Days Left"
          date="12/06/2021"
        />
        <TaskData
          title="Close off case #012920-RODRIGUES, Amiguel"
          deadline="2 Days Left"
          date="12/06/2021"
        />
      </div>
    </Card>
  );
};

export default CardTask;

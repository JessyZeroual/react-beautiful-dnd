const initialData = {
  tasks: {
    "tasks-1": { id: "tasks-1", content: "1Content 1" },
    "tasks-2": { id: "tasks-2", content: "2Content 2" },
    "tasks-3": { id: "tasks-3", content: "3Content 3" },
    "tasks-4": { id: "tasks-4", content: "4Content 4" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["tasks-1", "tasks-2", "tasks-3", "tasks-4"]
    }
  },
  //Facilitate reaording of the columns
  columnOrder: ["column-1"]
};

export default initialData;

const { Todo } = require("../db"); // Import the Todo model

async function populateTodo() {
  try {
    const todos = await Todo.bulkCreate([
      {
        id: "dba65e38-c832-4fa5-a88f-6bf6e335e29e",
        body: "preparar el desayuno",
        userId: 1,
      },
      {
        id: "00a6fa25-df29-4701-9077-557932591766",
        body: "estudiar csharp",
        userId: 1,
      },
      {
        id: "60b40630-713c-11ec-8cff-7f82f42f57ce",
        body: "repasar oracle",
        userId: 1,
      },
      {
        id: "aceaa425-7769-4ad7-af6b-422d25f23be9",
        body: "leer el conflicto de los siglos",
        userId: 2,
      },
      {
        id: "7982fcfe-5721-4632-bede-6000885be57d", 
        body: "preparar el almuerzo",
        userId: 2,
      },
      {
        id: "46b9abfc-872a-4693-875a-f7fa8a5f1b58",
        body: "estudiar java",
        userId: 3,
      },
      {
        id: "86044be7-fd2a-45d8-a091-988d63e74ab9",
        body: "estudiar sql server",
        userId: 3,
      },
      {
        id: "32a1caa1-e3bb-439b-891c-d6550cc2c4d4",
        body: "terminar la tarea de algoritmos",
        userId: 3,
      },
    ]);
    console.log("Todo table populated successfully");
  } catch (error) {
    console.error("Error populating Todo table:", error);
  }
}

module.exports = populateTodo;

import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-Items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{ name: "", dueDate: "" }];

  return (
    <TodoItemsContext.Provider value={[defaultTodoItems]}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />

        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>

        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

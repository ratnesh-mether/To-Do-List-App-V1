import { Provider } from "react-redux";
import AddListButton from "./components/Add-Button-Component/AddListButton";
import TaskInput from "./components/Task-Input-Component/TaskInput";
import TaskList from "./components/Task-Listing-Component/TaskList";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import "./styles.css";
import store from "./Redux-Store/store";
/*
  1. Change prop names. - Done.
  2. Edit Button. - Done.
  3. Introduce Context. - Done.
  4. Delete Task Button. - Done
  5. Complete Task. - In Progress...
  6. Add CSS. - In Progress.
  7. Optimise Context - Done.
  8. Introduce Redux - Done.
  9. Add unique keys to the list.
*/

export default function App() {
  return (
    <Provider store={store}>
      <DataContextProvider>
        <div className="App-Component">
          <h1>Magical TO DO List</h1>
          <TaskInput operation="ADD" />
          <div className="input-container">
            <AddListButton title="Add Task" operation="ADD" />
          </div>
          <TaskList />
        </div>
      </DataContextProvider>
    </Provider>
  );
}

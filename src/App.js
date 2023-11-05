import AddListButton from "./components/Add-Button-Component/AddListButton";
import TaskInput from "./components/Task-Input-Component/TaskInput";
import TaskList from "./components/Task-Listing-Component/TaskList";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import "./styles.css";
/*
  1. Change prop names. - Done.
  2. Edit Button. - Done.
  3. Introduce Context. - Done.
  4. Remove Button.
  5. Delete Task Button.
  6. Complete Task.
  7. Add CSS. - In Progress.
  8. Optimise Context - Done
*/

export default function App() {
  return (
  <DataContextProvider>
    <div className="App-Component">
      <h1>Advanced TO DO List App</h1>
      <TaskList/>
      <div className="input-container">
        <TaskInput operation="ADD"/>
        <AddListButton
          title="Add Task"
          operation="ADD"
        />
      </div>
    </div>
  </DataContextProvider>
  );
}

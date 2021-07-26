import InputData from "./component/input";
import ShowTodo from "./component/todoitems";
import { Store } from "./DataStore";

const App = () => {
  return (
    <>
      <Store>
        <InputData />
        <ShowTodo/>
      </Store>
    </>
  );
};
export default App;

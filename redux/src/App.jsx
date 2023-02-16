import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, incremenet, reset } from "./features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(incremenet())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      {count}
    </>
  );
}

export default App;

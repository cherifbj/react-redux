// useSelector : retreive value
// useDispatch : to call the action
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// call action
import { decrement, incremenet, reset } from "./features/counterSlice";

function App() {
  // call the state
  const count = useSelector((state) => state.counter.value);
  // prepare dispatch to call the action
  const dispatch = useDispatch();

  return (
    <>
      {/* add buttons to execute the action */}
      <button onClick={() => dispatch(incremenet({ number: 5 }))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      {/* Get the value*/}
      {count}
    </>
  );
}

export default App;

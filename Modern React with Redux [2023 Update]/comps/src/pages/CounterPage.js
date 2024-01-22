import React, { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";
import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_COUNTER = "add-value-to-counter";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.counter = state.counter + 1;
      return;
    case DECREMENT_COUNT:
      state.counter = state.counter - 1;
      return;
    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNTER:
      state.counter = state.counter + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  // const [counter, setCounter] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    counter: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCounter(counter + 1);
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    // setCounter(counter - 1);
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    // setValueToAdd(parseInt(event.target.value) || 0);

    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: parseInt(event.target.value) || 0,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCounter(counter + valueToAdd);
    // setValueToAdd(0);

    dispatch({ type: ADD_VALUE_TO_COUNTER });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.counter}</h1>
      <div className="flex flx-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;

import { createSignal, type Component } from "solid-js";

interface Props {
  initValue: number;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      <h1>Counter</h1>
      <h3>Value: {counter()}</h3>

      <button onClick={() => setCounter((prev) => ++prev)} class="btn mr-8">
        +1
      </button>
      <button onClick={() => setCounter((prev) => --prev)} class="btn ">
        -1
      </button>
    </>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount } from "./action";

const CountItem = (props) => {
  const { count, increase } = props;

  return (
    <>
      {count}
      <button onClick={increase}>Count</button>
    </>
  );
};

const Count = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseCount(count));
  };

  return <CountItem count={count} increase={increase} />;
};

export default Count;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { current, count } = useSelector((state) => {
    return {
      current: state.current,
      count: state.count,
    };
  });
  const changeCurrent = () => {
    dispatch({
      type: "SWITCH_CURRENT",
      current: "修改后的current",
    });
  };
  const increase = () => {
    dispatch({
      type: 'add',
      count,
    });
  };
  return (
    <div>
      子组件
      <h3>{current}</h3>
      <h3>{count}</h3>
      <button onClick={changeCurrent}>修改current</button>
      <button onClick={increase}> +1</button>
    </div>
  );
}

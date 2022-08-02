/*
 * @Author: Leo wy_10000@163.com
 * @Date: 2022-07-27 15:01:44
 * @LastEditors: Leo wy_10000@163.com
 * @LastEditTime: 2022-07-27 16:54:39
 * @FilePath: \projectd:\work\code\demo\react-app\antd-demo\src\store\reducer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const initialState = {
  menuName: "首页",
  current: "123123",
  count: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  console.log("action", action); // 使用dispatch调用action中的方法会触发更新state 获取到action之后根据type的不同来更改不同的值    类似于action:{type: "SWITCH_MEUN", menuName: "订单管理"}
  switch (action.type) {
    case "SWITCH_MEUN":
      return {
        ...state, // 保存上一个状态值的写法
        menuName: action.menuName,
      };
    case "SWITCH_CURRENT":
      return {
        ...state, // 保存上一个状态值的写法
        current: action.current,
      };
    case "add":
      return {
        ...state, // 保存上一个状态值的写法
        count: action.count + 1,
      };
    default:
      return { ...state };
  }
};

/**
 * 节流
 *
 * 表示在一定时间内中只执行一次
 *
 * 常用在滑动监听之类的场景
 */

console.log("start");

const throttle = (func) => {
  let timer = null;

  return function () {
    if (timer) return;

    timer = setTimeout(() => {
      func.call(this);
      timer = null;
    }, 500);
  };
};

const task = throttle(() => {
  console.log("click");
});

const onClickButton = () => {
  task();
};
